import React from 'react';
import { CorpGridContainerProps } from './CorpGridContainer.types';
import { CorpGridContainerBadge, CorpGridContainerElement, CorpGridContainerInfo } from './CorpGridContainer.styled';
import Link from 'next/Link';
import { BADGE_EXT, BADGE_URL } from '@imagine-cms/web';

export function CorpGridContainer({ corporation }: CorpGridContainerProps) {
  return (
    <Link href={`/corps/${corporation.id}`}>
      <CorpGridContainerElement>
        <CorpGridContainerBadge src={`${BADGE_URL}/${corporation.badge}.${BADGE_EXT}`} />
        <CorpGridContainerInfo>
          <h2>{corporation.displayName}</h2>
          <p>{corporation.description}</p>
        </CorpGridContainerInfo>
      </CorpGridContainerElement>
    </Link>
  );
}