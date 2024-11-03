import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CorporationModel } from './corporation.model';
import {
  CorporationCreateInput,
  CorporationFilterManyInput,
  CorporationFilterOneInput,
  CorporationUpdateInput,
} from './corporation.input';
import { GetUser } from '../session/get-user.decorator';
import { UserEntity } from '../database/user.entity';
import { CorpRepository } from '../database/corp.repository';
import { UnauthorizedException } from '@nestjs/common';
import { ILike, In } from 'typeorm';
import { CorpEntity } from '../database/corp.entity';
import { UserModel } from '../user/user.model';
import { RoomRepository } from '../database/room.repository';
import { UserRepository } from '../database/user.repository';
import { RoomModel } from '../room/room.model';
import { RPStatsRepository } from '../database/rp-stats.repository';

@Resolver(() => CorporationModel)
export class CorporationResolver {
  constructor(
    private readonly roomRepo: RoomRepository,
    private readonly userRepo: UserRepository,
    private readonly corporationRepo: CorpRepository,
    private readonly rpStatsRepo: RPStatsRepository,
  ) { }

  @ResolveField(() => Number, { nullable: true })
  async userCount(@Parent() parent: CorporationModel): Promise<number> {
    return this.rpStatsRepo.getInstance().count({
      where: {
        corpID: parent.id!,
      }
    })
  }

  @ResolveField(() => UserModel, { nullable: true })
  async user(@Parent() parent: CorporationModel): Promise<UserModel> {
    const user = await this.userRepo.findOneOrFail({ id: parent.id! });
    return UserModel.fromEntity(user);
  }

  @ResolveField(() => RoomModel, { nullable: true })
  async room(@Parent() parent: CorporationModel): Promise<RoomModel> {
    const room = await this.roomRepo.findOneOrFail({ id: parent.id! });
    return RoomModel.fromEntity(room);
  }

  @Query(() => [CorporationModel])
  async corporations(
    @Args('filter') filter: CorporationFilterManyInput
  ): Promise<CorporationModel[]> {
    const matchingCorps: CorpEntity[] =
      await this.corporationRepo.find({
        where: {
          id: filter.ids && In(filter.ids),
          displayName: filter.nameContains && ILike(`%${filter.nameContains}%`),
        },
        skip: filter.skip,
        take: filter.limit,
      });
    return matchingCorps.map(CorporationModel.fromEntity);
  }

  @Query(() => CorporationModel)
  async corporation(
    @Args('filter') filter: CorporationFilterOneInput
  ): Promise<CorporationModel> {
    const matchingCorporation = await this.corporationRepo.findOneOrFail({
      id: filter.id,
    });
    return CorporationModel.fromEntity(matchingCorporation);
  }

  @Mutation(() => CorporationModel)
  async corporationCreate(
    @Args('filter') input: CorporationCreateInput,
    @GetUser() session: UserEntity
  ): Promise<CorporationModel> {
    await this.userOwnsRoom(session, input.roomID);
    const newCorporation = await this.corporationRepo.create({
      displayName: input.name,
      description: input.description,
      badge: input.badge,
      industry: input.industry,
      sector: input.sector,
      userID: session.id!,
      roomID: input.roomID,
    });
    return CorporationModel.fromEntity(newCorporation);
  }

  @Mutation(() => Boolean)
  async corporationUpdate(
    @Args('filter') filter: CorporationFilterOneInput,
    @Args('filter') input: CorporationUpdateInput,
    @GetUser() session: UserEntity
  ): Promise<Boolean> {
    if (input.roomID) {
      await this.userOwnsRoom(session, input.roomID);
    }
    const matchingCorporation: CorporationModel =
      await this.corporation(filter);
    const matchingGroup = await this.corporationRepo.findOneOrFail({ id: matchingCorporation.id! });
    const doesUserOwnCorp: boolean = matchingGroup.userID === session.id;
    if (!doesUserOwnCorp) {
      throw new UnauthorizedException();
    }
    await this.corporationRepo.update({ id: matchingCorporation.id! }, input);
    return true;
  }

  @Mutation(() => Boolean)
  corporationDelete(
    @Args('filter') filter: CorporationFilterOneInput,
    @GetUser() session: UserEntity
  ): Promise<Boolean> {
    throw new Error('not implemented');
  }

  private async userOwnsRoom(user: UserEntity, roomID: number) {
    const matchingRoom = await this.roomRepo.findOneOrFail({ id: roomID });
    if (matchingRoom.userID !== user.id) {
      throw new UnauthorizedException();
    }
  }
}
