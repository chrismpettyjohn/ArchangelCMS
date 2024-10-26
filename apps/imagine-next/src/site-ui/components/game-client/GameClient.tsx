'use client'
import Link from 'next/Link';
import { GameClientElement } from './GameClient.styled';
import React, { useContext, useEffect, useState } from 'react';
import { NITRO_URL, sessionContext, themeContext } from '@imagine-cms/web';
import { GameUI } from '@imagine-cms/game-ui';
import { NITRO_CLIENT_URL } from '../../site-ui.const';
import { SessionCreateSSOResponse, useSessionCreateSSO } from '@imagine-cms/client';
import { toast } from 'react-toastify';

export function GameClient() {
  const createSSO = useSessionCreateSSO();
  const { session } = useContext(sessionContext);
  const { showClient } = useContext(themeContext);
  const [showPreview] = useState(true);
  const [ssoToken, setSSOToken] = useState<string>();

  async function onEnterClient() {
    try {
      const response: SessionCreateSSOResponse = await createSSO.execute();
      setSSOToken(response.sessionCreateSSO.ssoToken);
      toast.success('You have logged into the game')
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
    <GameClientElement $visible={showClient} $preview={showPreview}>
      {showClient && <GameUI ssoTicket={ssoToken} />}
      {
        showPreview && !showClient && (
          <Link href="/play">
            <div className="content">
              <div className="preview-overlay">
                <i className="fa fa-search-location" style={{ marginRight: 8 }} />
                Showing Preview
              </div>
            </div>
          </Link>
        )
      }
      <iframe
        src={`${NITRO_CLIENT_URL ?? NITRO_URL}?sso=${ssoToken}`}
        style={{ height: '100%', width: '100%' }}
      />
    </GameClientElement>
  );
}
