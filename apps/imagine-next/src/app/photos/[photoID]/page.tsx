import React from 'react';
import {UserGuard} from '@imagine-cms/web';
import {PhotoViewScreen} from '../../../site-ui/screens/photo-view-screen/PhotoViewScreen';

export default function Page() {
  return (
    <UserGuard redirect>
      <PhotoViewScreen />
    </UserGuard>
  );
}
