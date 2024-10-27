import { graphQLContext } from './GraphQLContext';
import React, { useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { generateGraphQLClient } from '../../app/graphql.client';
import { GraphQLContextProviderProps } from './GraphQLContext.types';

export function GraphQLContextProvider({ children, loadingScreen }: GraphQLContextProviderProps) {
  const [graphQLClient, setGraphQlClient] = useState<any | undefined>(undefined);

  const onRefreshClient = () => {
    const newGraphQLClient = generateGraphQLClient('');
    setGraphQlClient(newGraphQLClient);
  }

  useEffect(() => {
    if (graphQLClient) {
      return;
    }
    onRefreshClient()
  }, [graphQLClient]);

  if (!graphQLClient) {
    return (
      <>{loadingScreen}</>
    )
  }

  return (
    <ApolloProvider client={graphQLClient}>
      <graphQLContext.Provider value={{ graphQLClient, refreshClient: onRefreshClient }}>
        {children}
      </graphQLContext.Provider>
    </ApolloProvider>
  );
}
