import gql from 'graphql-tag';

export const SESSION_CREATED_FRAGMENT: any = gql`
  fragment SessionCreatedFragment on SessionCreatedModel {
    userID
    accessToken
  }
`

export interface SessionCreatedFragment {
  userID: number;
  accessToken: string;
}