import { gql } from 'graphql-tag';

export interface UserFragment {
  id: number;
  username: string;
}

export const USER_FRAGMENT: any = gql`
  fragment UserFragment on UserModel {
    id
    username
  }`
