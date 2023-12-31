import { Link } from 'wouter';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { ButtonBrand } from '../../components/button/Button.remix';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import { configContext, useSignInWithUsernameAndPassword, useUserCreateMutation } from '@imagine-cms/web';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [betaCode, setBetaCode] = useState('');
  const { config } = useContext(configContext);
  const [passwordAgain, setPasswordAgain] = useState('');
  const createUser = useUserCreateMutation(username, email, password, betaCode);
  const { tryLogin } = useSignInWithUsernameAndPassword(username, password);

  // When user is created, attempt to login
  useEffect(() => {
    if (createUser?.data?.userCreate?.id) {
      tryLogin();
    }
  }, [createUser?.data?.userCreate?.id]);

  const betaCodeRequirementsMet = config?.betaCodesRequired ? !!betaCode : true;

  const isLoading = createUser.loading;

  const canCreateUser = email !== '' && username !== '' && password !== '' && passwordAgain === password && betaCodeRequirementsMet && !isLoading;

  const onCreateUser = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!canCreateUser) {
      return;
    }
    createUser.runMutation();
  }

  return (
    <GuestContainer>
      <Form onSubmit={onCreateUser}>
        <label htmlFor="username">Username</label>
        <Input type="text" name="username" value={username} onChange={e => setUsername(e?.currentTarget?.value ?? '')} id="username" placeholder="Username" />
        <label htmlFor="email">Email</label>
        <Input type="text" name="email" value={email} onChange={e => setEmail(e?.currentTarget?.value ?? '')} id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" value={password} onChange={e => setPassword(e?.currentTarget?.value ?? '')} placeholder="Password" id="password" />
        <label htmlFor="password-confirmation">Confirm Password</label>
        <Input type="password" name="password_confirmation" value={passwordAgain} onChange={e => setPasswordAgain(e?.currentTarget?.value ?? '')} id="password-confirmation" placeholder="Password again" />
        {
          config?.betaCodesRequired && (
            <>

              <label htmlFor="username">Beta Code</label>
              <Input type="text" name="betaCode" value={betaCode} onChange={e => setBetaCode(e?.currentTarget?.value ?? '')} id="betaCode" placeholder="Beta Code" />
            </>
          )
        }
        <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'flex-end' }}>
          <Link to="/login">
            <ButtonBrand>Login</ButtonBrand>
          </Link>
          <Button className="btn btn-primary btn-block" disabled={!canCreateUser} type="submit">Join now</Button>
        </div>
      </Form>
    </GuestContainer>
  )
}
