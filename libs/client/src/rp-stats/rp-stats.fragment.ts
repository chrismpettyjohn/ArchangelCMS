import gql from "graphql-tag";
export const RP_STATS_FRAGMENT: any = gql`
  fragment RPStatsFragment on RPStatsModel {
    userID
    healthCurrent
    healthMax
    energyCurrent
    energyMax
    armorCurrent
    armorMax
    hungerCurrent
    hungerMax
    corporationID
    corporationRankID
    gangID
  }
`

export interface RPStatsFragment {
  userID: number;
  healthCurrent: number;
  healthMax: number;
  energyCurrent: number;
  energyMax: number;
  armorCurrent: number;
  armorMax: number;
  hungerCurrent: number;
  hungerMax: number;
  corporationID?: number;
  corporationPositionID?: number;
  gangID?: number;
  gangPositionID?: number;
}