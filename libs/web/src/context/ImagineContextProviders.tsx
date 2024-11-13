import React from 'react';
import { GraphQLContextProvider } from './graphql/GraphQLContextProvider';
import { SessionContextProvider } from './session/SessionContextProvider';
import { ImagineContextProvidersProps } from './ImagineContextProviders.types';

export function ImagineContextProviders({ children, loadingScreen }: ImagineContextProvidersProps) {
  return (
    <GraphQLContextProvider loadingScreen={loadingScreen}>
      <SessionContextProvider loadingScreen={loadingScreen}>
        {children}
      </SessionContextProvider>
    </GraphQLContextProvider>
  )
}
