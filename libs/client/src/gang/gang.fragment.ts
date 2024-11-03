import gql from "graphql-tag";
import { USER_FRAGMENT, UserFragment } from "../user/user.fragment";
import { ROOM_FRAGMENT, RoomFragment } from "../room/room.fragment";

export const GANG_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  ${ROOM_FRAGMENT}
  fragment GangFragment on GangModel {
    id
    displayName
    descripton
    badge
    userID
    roomID
    userCount
    user {
      ...UserFragment
    }
    room {
      ...RoomFragment
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
  userCount: number;
  user: UserFragment;
  room: RoomFragment;
}