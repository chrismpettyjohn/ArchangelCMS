import {BADGE_EXT, BADGE_URL} from '@imagine-cms/web';
import {BadgeProps} from './Badge.types';
import React, {useMemo, useState} from 'react';

export function Badge({badge, ...props}: BadgeProps) {
  const [isHidden, setIsHidden] = useState(false);
  const imageSrc = useMemo(() => {
    return `${BADGE_URL}/${badge.code}.${BADGE_EXT}`;
  }, [BADGE_URL, BADGE_EXT, badge.code]);

  if (isHidden) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      {...props}
      onError={() => setIsHidden(true)}
      loading="lazy"
    />
  );
}
