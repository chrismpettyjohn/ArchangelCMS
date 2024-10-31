import React, { useContext, useState } from 'react';
import {
  ScopeGuard,
  sessionContext,
  HOTEL_NAME,
} from '@imagine-cms/web';
import { useRouter } from 'next/navigation';
import { GameClientActionsElement } from './GameClientActions.styled';
import { Avatar } from '../../../components/avatar/Avatar';

export function GameClientActions() {
  const router = useRouter();
  const { session } = useContext(sessionContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function onViewProfile(): void {
    router.push('/me');
  }

  function onViewAdminPanel(): void {
    router.push('/admin/dashboard');
  }

  async function onToggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  return (
    <>
      <GameClientActionsElement>
        <button
          className="action"
          onClick={onViewProfile}
          style={{ maxWidth: 200, overflow: 'hidden' }}
        >
          <Avatar
            look={session?.look ?? '-'}
            headOnly={true}
            style={{ height: 35 }}
          />
          {session?.username ?? HOTEL_NAME}
        </button>
        <ScopeGuard redirect={false} scope="accessAdminPanel">
          <button
            className="action"
            style={{ marginRight: 4 }}
            onClick={onViewAdminPanel}
          >
            <i className="fa fa-shield" /> Admin
          </button>
        </ScopeGuard>
        <button className="action" onClick={onToggleFullScreen}>
          <i className={`fas ${isExpanded ? 'fa-compress' : 'fa-expand'}`} />
        </button>
      </GameClientActionsElement>
    </>
  );
}
