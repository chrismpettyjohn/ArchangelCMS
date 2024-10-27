import {ForgotPasswordRedeemCodeScreen} from '../../../site-ui/screens/forgot-password-redeem-code-screen/ForgotPasswordRedeemCodeScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <ForgotPasswordRedeemCodeScreen />
    </UserGuard>
  );
}
