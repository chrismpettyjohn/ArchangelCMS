import { sessionContext } from './SessionContext';
import React, { useCallback, useEffect, useState } from 'react';
import { SessionByJwtQueryResponse, useSessionByJwt } from '@imagine-cms/client';
import { SessionContextProviderProps } from './SessionContext.types';
import { localStorageService } from '../../service/local-storage.service';
import { SESSION_LOCAL_STORAGE_IDX } from '../../app';
import { toast } from 'react-toastify';

export function SessionContextProvider({ children, loadingScreen }: SessionContextProviderProps) {
  const existingJwt = localStorageService.get(SESSION_LOCAL_STORAGE_IDX, true);
  const [loading, setIsLoading] = useState(true);
  const [session, _setSessionState] = useState<any>();
  const fetchSession = useSessionByJwt();

  async function checkExistingSession() {
    try {
      if (!existingJwt) {
        setIsLoading(false);
        return;
      }
      const response: SessionByJwtQueryResponse = await fetchSession.execute(existingJwt);
      setSession(response.sessionByJWT.user);
      setIsLoading(false);
    } catch (e: any) {
      toast.error('You have been logged out');
      setIsLoading(false);
      throw e;
    }
  }

  useEffect(() => {
    checkExistingSession();
  }, []);

  const _setSession = useCallback((newSession?: any) => {
    _setSessionState(newSession);
  }, [_setSessionState])

  const setSession = useCallback((updates: Partial<any>) => {
    _setSessionState((_: any) => ({
      ..._,
      ...updates,
    }))
  }, [_setSessionState])

  if (loading) {
    return <>{loadingScreen}</>;
  }

  return <sessionContext.Provider value={{ session, _setSession, setSession }}>{children}</sessionContext.Provider>;
}
