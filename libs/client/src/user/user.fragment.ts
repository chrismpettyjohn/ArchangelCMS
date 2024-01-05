import { gql } from 'graphql-tag';
import { RPStatsFragment, RP_STATS_FRAGMENT } from '../rp-stats/rp-stats.fragment';
import { RANK_FRAGMENT, RankFragment } from '../rank/rank.fragment';

export interface UserFragment {
  id: number;
  username: string;
  rankID: number;
  credits: number;
  vipPoints: number;
  activityPoints: number;
  look: string;
  gender: string;
  motto: string;
  accountCreatedAt: number;
  lastOnlineAt: number;
  onlineStatus: 0 | 1;
  homeRoomID: number;
  discordID?: string;
  facebookID?: string;
  googleID?: string;
  language?: string;
  hasBetaCode?: boolean;
  rank: RankFragment;
  rpStats: RPStatsFragment;
}

export const USER_FRAGMENT: any = gql`
  ${RANK_FRAGMENT}
  ${RP_STATS_FRAGMENT}
  fragment UserFragment on UserModel {
    id
    username
    rankID
    credits
    vipPoints
    activityPoints
    look
    gender
    motto
    accountCreatedAt
    lastOnlineAt
    onlineStatus
    homeRoomID
    discordID
    facebookID
    googleID
    language
    hasBetaCode
    rank {
      ...RankFragment
    }
    rpStats {
      ...RPStatsFragment
    }
  }`
