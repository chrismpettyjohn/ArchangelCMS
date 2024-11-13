'use client';
import React from 'react';
import { useSession } from '@imagine-cms/web';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import Link from 'next/link';

export function MeScreen() {
  const session = useSession()

  return (
    <GuestContainer>
      <div className="register-container">
        <div className="form-header">
          <h1>{session?.username}</h1>
          <p>0 citizens exploring</p>
        </div>
      </div>
      <Link href="/play">
        <button className="register-button" style={{ background: 'green' }} type="button">Enter Game</button>
      </Link>
      <Link href="/logout">
        <button className="register-button" style={{ background: 'red' }} type="button">Logout</button>
      </Link>
    </GuestContainer>
  )
}
