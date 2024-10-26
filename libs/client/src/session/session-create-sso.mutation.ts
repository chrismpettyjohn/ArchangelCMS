import gql from 'graphql-tag';

export const SESSION_CREATE_SSO_MUTATION: any = gql`
  mutation {
    sessionCreateSSO {
      ssoToken
    }
  }
`

export interface SessionCreateSSOResponse {
  sessionCreateSSO: {
    ssoToken: string;
  }
}
