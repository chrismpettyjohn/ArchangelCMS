import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WEBSOCKET_HOST } from '../const';

export const SESSION_LOCAL_STORAGE_IDX = 'archangel-session';

export type GraphQLClient = ApolloClient<any>;

export function generateGraphQLClient(userIPAddress: string): ApolloClient<any> {
  return new ApolloClient({
    link: new WebSocketLink({
      lazy: true,
      uri: WEBSOCKET_HOST,
      options: {
        reconnect: true,
        connectionParams: () => {
          const accessToken = localStorage.getItem(SESSION_LOCAL_STORAGE_IDX);
          return {
            Authorization: `Bearer ${accessToken}`,
            'X-Forwarded-For': userIPAddress,
          }
        },
      },
    }) as any,
    cache: new InMemoryCache(),
  });
}