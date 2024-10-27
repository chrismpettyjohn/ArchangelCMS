import {LoginWithDiscordScreen} from '../../../site-ui/screens/login-with-discord-screen/LoginWithDiscordScreen';
import React from 'react';
import {GuestGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <GuestGuard redirect>
      <LoginWithDiscordScreen />
    </GuestGuard>
  );
}
