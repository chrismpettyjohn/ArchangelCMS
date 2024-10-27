import gql from "graphql-tag";
import { GROUP_FRAGMENT } from "../group/group.fragment";
import { USER_FRAGMENT, UserFragment } from "../user/user.fragment";

export const GANG_FRAGMENT: any = gql`
  ${GROUP_FRAGMENT}
  ${USER_FRAGMENT}
  fragment GangFragment on GangModel {
    id
    displayName
    descripton
    badge
    userID
    roomID
    user {
      ...UserFragment
    }
  }
`

export interface GangFragment {
  id: number;
  displayName: string;
  description: string;
  badge: string;
  userID: number;
  roomID: number;
  user: UserFragment;
}