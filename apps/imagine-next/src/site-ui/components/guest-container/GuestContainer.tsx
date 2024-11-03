import Link from 'next/link';
import './GuestContainer.scss';
import React, { ReactNode } from 'react';

interface GuestContainerProps {
  children: ReactNode;
}

export function GuestContainer({ children }: GuestContainerProps) {
  return (
    <div className="guest-container">
      <main>
        <img src="/img/logo.gif" alt="HabRPG Logo" className="logo" />
        <br />
        {children}
        <div
          style={{
            display: 'flex',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link href="/about" style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}>
            <h4 style={{ margin: 0, paddingBottom: 8 }}>Archangel 2</h4>
          </Link>
        </div>
      </main>
    </div>
  );
}
