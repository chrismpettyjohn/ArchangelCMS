import React from 'react';
import {SiteSidebar} from '../site-sidebar/SiteSidebar';
import {AdminContainerProps} from './AdminContainer.types';
import {PageContainerElement, SiteContainerElement} from '../../AdminUI.styled';

export function AdminContainer({children}: AdminContainerProps) {
  return (
    <SiteContainerElement>
      <SiteSidebar />
      <PageContainerElement>{children}</PageContainerElement>
    </SiteContainerElement>
  );
}
