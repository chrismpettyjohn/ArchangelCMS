import {LogoutScreen} from '../../site-ui/screens/logout-screen/LogoutScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <LogoutScreen />
    </UserGuard>
  );
}
