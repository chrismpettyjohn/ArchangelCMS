'use client';
import Link from 'next/link';
import { GameClientElement } from './GameClient.styled';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { NITRO_URL, sessionContext } from '@imagine-cms/web';
import { NITRO_CLIENT_URL } from '../../site-ui.const';
import {
  SessionCreateSSOResponse,
  useSessionCreateSSO,
} from '@imagine-cms/client';
import { toast } from 'react-toastify';
import { GameClientActions } from '../../screens/play-game-screen/game-client-actions/GameClientActions';
import { usePathname } from 'next/navigation';

export function GameClient() {
  const pathname = usePathname();
  const createSSO = useSessionCreateSSO();
  const { session } = useContext(sessionContext);
  const [ssoToken, setSSOToken] = useState<string>();
  const showClient = useMemo(() => pathname == '/play', [pathname]);

  async function onEnterClient() {
    try {
      const response: SessionCreateSSOResponse = await createSSO.execute();
      setSSOToken(response.sessionCreateSSO.ssoToken);
      toast.success('You have logged into the game');
    } catch (e: any) {
      toast.error('Failed to login to the game');
      throw e;
    }
  }

  useEffect(() => {
    if (!session) {
      return;
    }
    onEnterClient();
  }, [session]);

  if (!session || !ssoToken) {
    return null;
  }

  return (
    <>
      <GameClientElement $visible={showClient}>
        {showClient && <GameClientActions />}
        <iframe
          src={`${NITRO_CLIENT_URL ?? NITRO_URL}?sso=${ssoToken}`}
          style={{ height: '100%', width: '100%' }}
        />
      </GameClientElement >
    </>
  );
}
