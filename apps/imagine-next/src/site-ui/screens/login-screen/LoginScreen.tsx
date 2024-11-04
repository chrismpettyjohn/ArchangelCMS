'use client';
import React, { SyntheticEvent, useContext, useState } from 'react';;
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import Link from 'next/link';
import { graphQLContext, SESSION_LOCAL_STORAGE_IDX, sessionContext } from '@imagine-cms/web';
import { useSessionCreateWithCredentials, useUserFetchOne } from '@imagine-cms/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setSession } = useContext(sessionContext);
  const sessionCreate = useSessionCreateWithCredentials();
  const userLookup = useUserFetchOne();
  const { refreshClient } = useContext(graphQLContext);

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

      refreshClient();
      router.push('/me');
    } catch (e: any) {
      toast.error('Check your credentials and try again');
      throw e;
    }
  }

  return (
    <GuestContainer>
      <div className="register-container">
        <div className="form-header">
          <h1>Login</h1>
          <p>0 citizens exploring</p>
        </div>

        <form onSubmit={onLogin} id="loginForm">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={email}
              onChange={e => setEmail(e.currentTarget.value ?? '')}
            />
            <div className="error-message">Please enter a valid email address</div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Create a password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={e => setPassword(e.currentTarget.value ?? '')}
            />
            <div className="password-requirements">
              Password must be at least 8 characters long and include a mix of letters, numbers, and symbols
            </div>
          </div>

          <button disabled={isDisabled} type="submit" className="register-button">Login</button>

          <div className="form-links">
            Already have an account? <Link href="/register">Sign up</Link>
          </div>
        </form>
      </div>
    </GuestContainer>
  )
}
