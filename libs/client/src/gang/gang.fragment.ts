import gql from "graphql-tag";
import { GROUP_FRAGMENT } from "../group/group.fragment";

export const GANG_FRAGMENT: any = gql`
  ${GROUP_FRAGMENT}
  fragment GangFragment on GangModel {
    id
    displayName
    descripton
    userID
    roomID
  }
`

export interface GangFragment {
  id: number;
  displayName: string;
  description: string;
  userID: number;
  roomID: number;
}