import {RoomViewScreen} from '../../../site-ui/screens/room-view-screen/RoomViewScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <RoomViewScreen />
    </UserGuard>
  );
}
