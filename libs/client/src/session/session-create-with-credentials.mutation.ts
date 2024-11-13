import gql from 'graphql-tag';
import { SessionCreateWithCredentialsInput } from './session.input';

export const SESSION_CREATE_WITH_CREDENTIAL_MUTATION: any = gql`
  mutation($input: SessionCreateWithCredentialsInput!) {
    sessionCreateWithCredentials(input: $input) {
      accessToken
      userID
    }
  }
`

export interface SessionCreateWithCredentialsResponse {
    sessionCreateWithCredentials: {
        accessToken: string;
        userID: number;
    }
}

export interface SessionCreateWithCredentialsVariables {
    input: SessionCreateWithCredentialsInput;
}