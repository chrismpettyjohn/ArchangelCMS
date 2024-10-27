import {HighScoresCrimeScreen} from '../../../site-ui/screens/high-scores-crime-screen/HighScoresCrimeScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <HighScoresCrimeScreen />
    </UserGuard>
  );
}
