'use client';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useContext, useState } from 'react';
import {
  SESSION_LOCAL_STORAGE_IDX,
  sessionContext,
  SITE_NAME,
} from '@imagine-cms/web';
import {
  Button,
  Footer,
  FormContainer,
  Header,
  Logo,
  PageContainer,
  Title,
  UserStatus,
} from './LoginScreen.styled';
import {
  useSessionCreateWithCredentials,
  useUserFetchOne,
} from '@imagine-cms/client';
import { useRouter } from 'next/navigation';

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setSession } = useContext(sessionContext);
  const sessionCreate = useSessionCreateWithCredentials();
  const userLookup = useUserFetchOne();

  const isDisabled = !email || !password;

  async function onLogin(event: SyntheticEvent) {
    try {
      event.preventDefault();
      if (!email) {
        toast.error('You must provide an email address');
      }
      if (!password) {
        toast.error('You must provide a password');
      }

      const newSession = await sessionCreate.execute(email, password);
      localStorage.setItem(
        SESSION_LOCAL_STORAGE_IDX,
        newSession.sessionCreateWithCredentials.accessToken
      );

      const matchingUser = await userLookup.fetch({
        id: newSession.sessionCreateWithCredentials.userID,
      });
      setSession(matchingUser);

      toast.success(`Welcome back, ${matchingUser.username}`);
      router.push('/me');
    } catch (e: any) {
      toast.error('Check your credentials and try again');
      throw e;
    }
  }

  return (
    <PageContainer>
      <FormContainer>
        <Header>
          <Logo>{SITE_NAME}</Logo>
          <UserStatus>1 users online</UserStatus>
        </Header>
        <Title>Login</Title>
        <Form onSubmit={onLogin}>
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <Button disabled={isDisabled} type="submit">
            Sign In
          </Button>
          <Link href="/register">
            <Button type="button">Create Account</Button>
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
