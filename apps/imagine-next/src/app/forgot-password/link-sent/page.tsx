import {ForgotPasswordLinkSentScreen} from '../../../site-ui/screens/forgot-password-link-sent-screen/ForgotPasswordLinkSentScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <ForgotPasswordLinkSentScreen />
    </UserGuard>
  );
}
