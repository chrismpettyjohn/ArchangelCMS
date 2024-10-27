'use client';
import React, {useContext, useEffect} from 'react';
import {
  sessionContext,
  localStorageService,
  graphQLContext,
} from '@imagine-cms/web';
import {useRouter} from 'next/navigation';

export function LogoutScreen() {
  const router = useRouter();
  const {_setSession} = useContext(sessionContext);
  const {refreshClient} = useContext(graphQLContext);

  useEffect(() => {
    localStorageService.purge();
    _setSession(undefined);
    refreshClient();
    router.push('/login');
  }, []);

  return null;
}
