import React from 'react';
import { CorpGridContainerBadge, CorpGridContainerElement, CorpGridContainerInfo } from './CorpGridContainer.styled';
import { BADGE_EXT, BADGE_URL } from '@imagine-cms/web';

export function CorpGridContainerMock() {
  return (
    <CorpGridContainerElement>
      <CorpGridContainerBadge src={`${BADGE_URL}/ADM.${BADGE_EXT}`} />
      <CorpGridContainerInfo>
        <h2>-</h2>
        <p>
          <i className="fa fa-spinner fa-spin" />
        </p>
      </CorpGridContainerInfo>
    </CorpGridContainerElement>
  );
}