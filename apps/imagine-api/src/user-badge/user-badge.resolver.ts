import {In} from 'typeorm';
import {UserBadgeModel} from './user-badge.model';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {UserBadgeFilterManyInput} from './user-badge.input';
import {UserBadgeRepository} from '../database/user-badge.repository';

@Resolver(() => UserBadgeModel)
export class UserBadgeResolver {
  constructor(private readonly userBadgeRepo: UserBadgeRepository) {}

  @Query(() => [UserBadgeModel])
  async userBadges(
    @Args('filter') filter: UserBadgeFilterManyInput
  ): Promise<UserBadgeModel[]> {
    const matchingBadges = await this.userBadgeRepo.find({
      where: {
        badgeCode: filter.badgeCodes && In(filter.badgeCodes),
        userID: filter.userIDs && In(filter.userIDs),
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingBadges.map(UserBadgeModel.fromEntity);
  }
}
