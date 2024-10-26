import { Resolver, Query, Args } from '@nestjs/graphql';
import { ILike, In } from 'typeorm';
import { CorpRoleModel } from './corporation-role.model';
import { CorpRoleRepository } from '../database/corp-role.repository';
import { CorpRoleFilterManyInput } from './corporation-role.input';
import { CorpRoleEntity } from '../database/corp-role.entity';

@Resolver(() => CorpRoleModel)
export class CorpRoleResolver {
  constructor(
    private readonly corporationRankRepo: CorpRoleRepository
  ) { }

  @Query(() => [CorpRoleModel])
  async corporationRanks(
    @Args('filter') filter: CorpRoleFilterManyInput
  ): Promise<CorpRoleModel[]> {
    const matchingCorporationRanks: CorpRoleEntity[] =
      await this.corporationRankRepo.find({
        where: {
          corpID: filter.ids && In(filter.ids),
          id: filter.ids && In(filter.ids),
          displayName: filter.nameSearch && ILike(`%${filter.nameSearch}%`),
        },
        skip: filter.skip,
        take: filter.limit,
      });
    return matchingCorporationRanks.map(CorpRoleModel.fromEntity);
  }
}
