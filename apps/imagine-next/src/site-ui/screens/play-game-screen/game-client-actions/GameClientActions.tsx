import './GameClientActions.scss';
import React, { useContext, useState } from 'react';
import {
  sessionContext,
} from '@imagine-cms/web';
import { useRouter } from 'next/navigation';

export function GameClientActions() {
  const router = useRouter();
  const { session } = useContext(sessionContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function onViewProfile(): void {
    router.push('/me');
  }

  async function onToggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  return (
    <div className="game-client-actions">
      <button
        className="action"
        onClick={onViewProfile}
        style={{ maxWidth: 200, overflow: 'hidden' }}
      >
        <i className="fas fa-arrow-left" style={{ marginRight: 8 }} />
        Web
      </button>
      <button className="action" onClick={onToggleFullScreen}>
        <i className={`fas ${isExpanded ? 'fa-compress' : 'fa-expand'}`} />
      </button>
    </div>
  );
}
