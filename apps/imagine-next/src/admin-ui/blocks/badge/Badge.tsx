import { BADGE_EXT, BADGE_URL } from '@imagine-cms/web';
import { BadgeProps } from './Badge.types';
import React, { useEffect, useMemo, useState } from 'react';

export function Badge({ badge, overrideBadgeURL, overrideBadgeEXT, ...props }: BadgeProps) {
  const [isHidden, setIsHidden] = useState(false);
  const badgeURL = overrideBadgeURL ?? BADGE_URL;
  const badgeEXT = overrideBadgeEXT ?? BADGE_EXT;

  const imageSrc = useMemo(() => {
    return `${badgeURL}/${badge.code}.${badgeEXT}`
  }, [badgeURL, badgeEXT, badge.code]);

  useEffect(() => {
    setIsHidden(false);
  }, [badgeURL, badgeEXT, badge.code]);

  if (isHidden) {
    return null;
  }

  return (
    <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" height={50} />
  )
}