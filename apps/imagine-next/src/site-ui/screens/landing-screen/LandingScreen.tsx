'use client';
import {useContext} from 'react';
import {sessionContext} from '@imagine-cms/web';
import {useRouter} from 'next/navigation';

export function LandingScreen() {
  const router = useRouter();
  const {session} = useContext(sessionContext);

  return router.push(session ? '/me' : '/login');
}
