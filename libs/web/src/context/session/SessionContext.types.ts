import { ReactNode } from 'react';

export interface SessionContext {
  session?: any;
  _setSession(newSession?: any): void;
  setSession(changes: Partial<any>): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  _setSession(newSession?: any) { },
  setSession(changes: Partial<any>) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
  loadingScreen: ReactNode;
}
