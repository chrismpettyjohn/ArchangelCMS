import { BanEntity } from './ban.entity';
import { UserEntity } from './user.entity';
import { BanRepository } from './ban.repository';
import { UserRepository } from './user.repository';
import { BetaCodeRepository } from './beta-code.repository';
import { BetaCodeEntity } from './beta-code.entity';

export const databaseEntities = [
  UserEntity,
  BanEntity,
  BetaCodeEntity,
];

export const databaseRepositories = [
  UserRepository,
  BanRepository,
  BetaCodeRepository,
];
