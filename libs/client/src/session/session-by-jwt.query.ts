import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const SESSION_BY_JWT_QUERY = gql`
  ${USER_FRAGMENT}
  query SessionByJWT($jwt: String!) {
    sessionByJWT(jwt: $jwt) {
      user {
        ...UserFragment
      }
    }
  }
`;

export interface SessionByJwtQueryVariables {
  jwt: string;
}

export interface SessionByJwtQueryResponse {
  sessionByJWT: {
    user: UserFragment;
  }
}
