import Link from 'next/link';
import React from 'react';

export function SiteHeader() {
  return (
    <>
      <img src="https://habbofont.net/font/habbo_new_big/habrpg.gif" alt="HabRPG Logo" className="logo" />
      <div className="online-status">300 players online</div>
      <nav className="nav-menu">
        <Link href="/me"><i className="fas fa-home"></i>Home</Link>
        <Link href="/corps"><i className="fas fa-building"></i>Corporations</Link>
        <Link href="/leaderboards"><i className="fas fa-trophy"></i>Leaderboards</Link>
        <Link href="/gangs"><i className="fas fa-users"></i>Gangs</Link>
        <Link href="/logout"><i className="fas fa-right-from-bracket"></i>Logout</Link>
      </nav>
    </>
  );
}
