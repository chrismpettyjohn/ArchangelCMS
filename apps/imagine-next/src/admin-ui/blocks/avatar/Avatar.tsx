import { FIGURE_URL } from '@imagine-cms/web';
import { AvatarProps } from './Avatar.types';
import React, { useMemo, useState } from 'react';

export function Avatar({ look, headOnly = false, size, direction, headDirection, gesture, ...props }: AvatarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const imageSrc = useMemo(() => {
    let baseImageSrc = `${FIGURE_URL}?figure=${look}`;

    if (headOnly) {
      baseImageSrc += `&headonly=1`
    }

    if (size) {
      baseImageSrc += `&size=${size}`
    }

    if (direction) {
      baseImageSrc += `&direction=${direction}`
    }

    if (headDirection) {
      baseImageSrc += `&head_direction=${headDirection}`
    }

    if (gesture) {
      baseImageSrc += `&gesture=${gesture}`
    }

    return baseImageSrc
  }, [FIGURE_URL]);

  if (isHidden) {
    return null;
  }
  return <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" />
}
