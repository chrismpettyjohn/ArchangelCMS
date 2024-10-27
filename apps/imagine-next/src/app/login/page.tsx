import {LoginScreen} from '../../site-ui/screens/login-screen/LoginScreen';

import React from 'react';
import {GuestGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <GuestGuard redirect>
      <LoginScreen />
    </GuestGuard>
  );
}
