import Link from 'next/link';
import React from 'react';

export function SiteHeader() {
  return (
    <>
      <img src="/img/logo.gif" alt="HabRPG Logo" className="logo" />
      <div className="online-status">300 players online</div>
      <nav className="nav-menu">
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center', maxWidth: 1230 }}>
          <div style={{ display: 'flex', flex: 1, gap: 10 }}>
            <Link href="/me"><i className="fas fa-home"></i>Home</Link>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/logout"><i className="fas fa-right-from-bracket"></i>Logout</Link>
          </div>
        </div>
      </nav >
    </>
  );
}
