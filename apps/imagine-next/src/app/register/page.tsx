import {RegisterScreen} from '../../site-ui/screens/register-screen/RegisterScreen';

import React from 'react';
import {GuestGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <GuestGuard redirect>
      <RegisterScreen />
    </GuestGuard>
  );
}
