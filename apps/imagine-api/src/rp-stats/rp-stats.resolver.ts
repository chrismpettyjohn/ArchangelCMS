import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { In } from 'typeorm';
import { RPStatsModel } from './rp-stats.model';
import { RPStatsRepository } from '../database/rp-stats.repository';
import { RPStatsEntity } from '../database/rp-stats';
import { RPStatsFilterManyInput, RPStatsFilterOneInput } from './rp-stats.input';
import { GangRepository } from '../database/gang.repository';
import { CorpRepository } from '../database/corp.repository';
import { GangModel } from '../gang/gang.model';
import { CorporationModel } from '../corporation/corporation.model';
import { CorpRoleModel } from '../corporation-role/corporation-role.model';
import { CorpRoleRepository } from '../database/corp-role.repository';

@Resolver(() => RPStatsModel)
export class RPStatsResolver {
  constructor(
    private readonly rpStatsRepo: RPStatsRepository,
    private readonly gangRepo: GangRepository,
    private readonly corporationRepo: CorpRepository,
    private readonly corporationRankRepo: CorpRoleRepository
  ) { }

  @ResolveField(() => GangModel, { nullable: true })
  async gang(@Parent() { gangID }: RPStatsEntity): Promise<GangModel> {
    const matchingGang = await this.gangRepo.findOneOrFail({ id: gangID });
    return GangModel.fromEntity(matchingGang);
  }

  @ResolveField(() => CorporationModel, { nullable: true })
  async corporation(
    @Parent() { corpID: corporationID }: RPStatsEntity
  ): Promise<CorporationModel> {
    const matchingCorp = await this.corporationRepo.findOneOrFail({
      id: corporationID,
    });
    return CorporationModel.fromEntity(matchingCorp);
  }

  @ResolveField(() => CorpRoleModel, { nullable: true })
  async corporationRank(
    @Parent() { corpID: corporationID, corpRoleID: corporationRankID }: RPStatsEntity
  ): Promise<CorpRoleModel> {
    const matchingCorpRank = await this.corporationRankRepo.findOneOrFail({
      corpID: corporationID,
      id: corporationRankID,
    });
    return CorpRoleModel.fromEntity(matchingCorpRank);
  }

  @Query(() => RPStatsModel)
  async rpStat(
    @Args('filter') filter: RPStatsFilterOneInput
  ): Promise<RPStatsModel> {
    const matchingRPStat: RPStatsEntity = await this.rpStatsRepo.findOneOrFail({
      userID: filter.userID,
    });
    return RPStatsModel.fromEntity(matchingRPStat);
  }

  @Query(() => [RPStatsModel])
  async rpStats(
    @Args('filter') filter: RPStatsFilterManyInput
  ): Promise<RPStatsModel[]> {
    const matchingRPStats: RPStatsEntity[] = await this.rpStatsRepo.find({
      where: {
        userID: filter.userIDs && In(filter.userIDs),
      },
      order: {
        id: 'DESC',
      },
      skip: filter.skip,
      take: filter.limit,
    });
    return matchingRPStats.map(RPStatsModel.fromEntity);
  }
}
