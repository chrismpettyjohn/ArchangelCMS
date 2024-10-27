import {HighScoresActivityScreen} from '../../../site-ui/screens/high-scores-activity-screen/HighScoresActivityScreen';

import React from 'react';
import {UserGuard} from '@imagine-cms/web';

export default function Page() {
  return (
    <UserGuard redirect>
      <HighScoresActivityScreen />
    </UserGuard>
  );
}
