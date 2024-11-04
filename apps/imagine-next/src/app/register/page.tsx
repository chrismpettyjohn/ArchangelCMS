import React from 'react';
import { GuestGuard } from '@imagine-cms/web';
import { RegisterScreen } from '../../site-ui/screens/register-screen/RegisterScreen';

export default function Page() {
  return (
    <GuestGuard redirect>
      <RegisterScreen />
    </GuestGuard>
  );
}
