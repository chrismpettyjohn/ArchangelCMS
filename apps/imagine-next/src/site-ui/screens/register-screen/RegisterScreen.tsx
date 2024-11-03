'use client';
import React, { SyntheticEvent, useContext, useState } from 'react';
import {
  BETA_ENABLED,
  localStorageService,
  SESSION_LOCAL_STORAGE_IDX,
  sessionContext,
} from '@imagine-cms/web';
import {
  UserCreateInput,
  UserGender,
  useUserCreate,
  useUserFetchOne,
} from '@imagine-cms/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import Link from 'next/link';

export function RegisterScreen() {
  const router = useRouter();
  const createUser = useUserCreate();
  const fetchUser = useUserFetchOne();
  const { setSession } = useContext(sessionContext);
  const [userCreateInput, setUserCreateInput] = useState<UserCreateInput>({
    username: '',
    email: '',
    password: '',
    gender: UserGender.Male,
    betaCode: '',
  });
  const [passwordAgain, setPasswordAgain] = useState('');

  const betaCodeRequirementsMet = BETA_ENABLED
    ? !!userCreateInput.betaCode
    : true;

  const isLoading = createUser.loading;

  const canCreateUser =
    userCreateInput.email !== '' &&
    userCreateInput.username !== '' &&
    userCreateInput.password !== '' &&
    userCreateInput.password === passwordAgain &&
    betaCodeRequirementsMet &&
    !isLoading;

  function onChanges(changes: Partial<UserCreateInput>) {
    setUserCreateInput(_ => ({
      ..._,
      ...changes,
    }));
  }

  async function onRegister(event: SyntheticEvent) {
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
      const matchingUser = await fetchUser.fetch({ id: newSession.userID });
      setSession(matchingUser as any);
      toast.success(`Welcome back, ${matchingUser.username}`);
      router.push('/me');
    } catch (e: any) {
      toast.error('Failed to create user');
      throw e;
    }
  }

  return (
    <GuestContainer>
      <div className="register-container">
        <div className="form-header">
          <h1>Create Account</h1>
          <p>Join our community today</p>
        </div>

        <form onSubmit={onRegister} id="registerForm">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Choose a username"
              autoComplete="username"
              required
              minLength={3}
              maxLength={20}
              pattern="^[a-zA-Z0-9_-]+$"
              value={userCreateInput.username}
              onChange={e => onChanges({ username: e.currentTarget.value ?? '' })}
            />
            <div className="error-message">Username must be 3-20 characters long</div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={userCreateInput.email}
              onChange={e => onChanges({ email: e.currentTarget.value ?? '' })}
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
              value={userCreateInput.password}
              onChange={e => onChanges({ password: e.currentTarget.value ?? '' })}
            />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              value={userCreateInput.username}
              onChange={e => setPasswordAgain(e.currentTarget.value ?? '')}
            />
            <div className="error-message">Passwords must match</div>
          </div>

          {
            BETA_ENABLED && (
              <div className="form-group">
                <label>Beta access code</label>
                <input
                  type="text"
                  id="betaCode"
                  className="form-input"
                  placeholder="Enter your beta code"
                  required
                  value={userCreateInput.betaCode}
                  onChange={e => onChanges({ betaCode: e.currentTarget.value ?? '' })}
                />
              </div>
            )
          }

          <button disabled={!canCreateUser} type="submit" className="register-button">Create Account</button>

          <div className="form-links">
            Already have an account? <Link href="/login">Login</Link>
          </div>
        </form>
      </div>
    </GuestContainer>
  )
}
