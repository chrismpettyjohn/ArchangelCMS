import './GameClientActions.scss';
import React from 'react';
import { useRouter } from 'next/navigation';

export function GameClientActions() {
  const router = useRouter();

  function onViewProfile(): void {
    router.push('/me');
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
    </div>
  );
}
