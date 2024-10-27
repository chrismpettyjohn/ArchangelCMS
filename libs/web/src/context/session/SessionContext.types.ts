import { UserFragment } from '@imagine-cms/client';
import { ReactNode } from 'react';

export interface SessionContext {
  session?: UserFragment;
  _setSession(newSession?: UserFragment): void;
  setSession(changes: Partial<UserFragment>): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  _setSession(newSession?: UserFragment) { },
  setSession(changes: Partial<UserFragment>) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
  loadingScreen: ReactNode;
}
