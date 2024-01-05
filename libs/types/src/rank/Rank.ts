import {UserWire} from '../user/User';
import {RankFlagsWire, RankScopesWire} from './RankScopes';

export interface RankWire {
  id: number;
  name: string;
  badgeCode: string;
  backgroundColor: string;
  users?: UserWire[];
  scopes: RankScopesWire;
  flags: RankFlagsWire;
}
