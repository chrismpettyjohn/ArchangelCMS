'use client';
import {Form} from '../../components/form/Form';
import {Input} from '../../components/input/Input';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {
  BETA_ENABLED,
  localStorageService,
  SESSION_LOCAL_STORAGE_IDX,
  sessionContext,
  SITE_NAME,
} from '@imagine-cms/web';
import {
  UserCreateInput,
  UserGender,
  useUserCreate,
  useUserFetchOne,
} from '@imagine-cms/client';
import {toast} from 'react-toastify';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {
  Footer,
  FormContainer,
  Header,
  Logo,
  PageContainer,
  Title,
  UserStatus,
  Button,
} from '../login-screen/LoginScreen.styled';
import {usersOnlineContext} from '@imagine-cms/websocket';

export function RegisterScreen() {
  const router = useRouter();
  const createUser = useUserCreate();
  const fetchUser = useUserFetchOne();
  const {setSession} = useContext(sessionContext);
  const {usersOnline} = useContext(usersOnlineContext);
  const [userCreateInput, setUserCreateInput] = useState<UserCreateInput>({
    username: '',
    email: '',
    password: '',
    gender: UserGender.Male,
    betaCode: '',
  });

  const betaCodeRequirementsMet = BETA_ENABLED
    ? !!userCreateInput.betaCode
    : true;

  const isLoading = createUser.loading;

  const canCreateUser =
    userCreateInput.email !== '' &&
    userCreateInput.username !== '' &&
    userCreateInput.password !== '' &&
    betaCodeRequirementsMet &&
    !isLoading;

  function onChanges(changes: Partial<UserCreateInput>) {
    setUserCreateInput(_ => ({
      ..._,
      ...changes,
    }));
  }

  async function onCreateUser(event: SyntheticEvent) {
    event.preventDefault();
    try {
      if (!canCreateUser) {
        return;
      }
      const newSession = await createUser.execute(userCreateInput);
      localStorageService.set(
        SESSION_LOCAL_STORAGE_IDX,
        newSession.accessToken
      );
      const matchingUser = await fetchUser.fetch({id: newSession.userID});
      setSession(matchingUser as any);
      toast.success(`Welcome back, ${matchingUser.username}`);
      router.push('/me');
    } catch (e: any) {
      toast.error('Failed to create user');
      throw e;
    }
  }

  return (
    <PageContainer>
      <FormContainer>
        <Header>
          <Logo>{SITE_NAME}</Logo>
          <UserStatus>{usersOnline} users online</UserStatus>
        </Header>
        <Title>Register</Title>
        <Form onSubmit={onCreateUser}>
          <Input
            type="email"
            placeholder="Email"
            required
            value={userCreateInput.email}
            onChange={e => onChanges({email: e.currentTarget.value})}
          />
          <Input
            type="text"
            placeholder="Username"
            required
            value={userCreateInput.username}
            onChange={e => onChanges({username: e.currentTarget.value})}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={userCreateInput.password}
            onChange={e => onChanges({password: e.currentTarget.value})}
          />
          <Button disabled={!canCreateUser} type="submit">
            Create Account
          </Button>
          <Link href="/login">
            <Button type="button">Sign In</Button>
          </Link>
        </Form>
      </FormContainer>
      <Footer>
        Powered by <b>Archangel</b> <br />
        by <b>LeChris</b>
      </Footer>
    </PageContainer>
  );
}
