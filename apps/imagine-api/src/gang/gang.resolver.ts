import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GangModel } from './gang.model';
import {
  GangCreateInput,
  GangFilterManyInput,
  GangFilterOneInput,
  GangUpdateInput,
} from './gang.input';
import { GetUser } from '../session/get-user.decorator';
import { UserEntity } from '../database/user.entity';
import { GangRepository } from '../database/gang.repository';
import { UnauthorizedException } from '@nestjs/common';
import { ILike, In } from 'typeorm';
import { GangEntity } from '../database/gang.entity';
import { UserModel } from '../user/user.model';
import { UserRepository } from '../database/user.repository';
import { RoomRepository } from '../database/room.repository';
import { RoomModel } from '../room/room.model';
import { RPStatsRepository } from '../database/rp-stats.repository';

@Resolver(() => GangModel)
export class GangResolver {
  constructor(
    private readonly roomRepo: RoomRepository,
    private readonly gangRepo: GangRepository,
    private readonly userRepo: UserRepository,
    private readonly rpStatsRepo: RPStatsRepository,
  ) { }

  @ResolveField(() => Number, { nullable: true })
  async userCount(@Parent() parent: GangModel): Promise<number> {
    return this.rpStatsRepo.getInstance().count({
      where: {
        gangID: parent.id!,
      }
    })
  }

  @ResolveField(() => UserModel, { nullable: true })
  async user(@Parent() parent: GangModel): Promise<UserModel> {
    const matchingUser = await this.userRepo.findOneOrFail({ id: parent.id });
    return UserModel.fromEntity(matchingUser);
  }

  @ResolveField(() => RoomModel, { nullable: true })
  async room(@Parent() parent: GangModel): Promise<RoomModel> {
    const room = await this.roomRepo.findOneOrFail({ id: parent.id! });
    return RoomModel.fromEntity(room);
  }

  @Query(() => [GangModel])
  async gangs(
    @Args('filter') filter: GangFilterManyInput
  ): Promise<GangModel[]> {
    const gangs: GangEntity[] =
      await this.gangRepo.find({
        where: {
          id: filter.ids && In(filter.ids),
          displayName: filter.nameContains && ILike(`%${filter.nameContains}%`),
        },
        skip: filter.skip,
        take: filter.limit,
      });
    return gangs.map(GangModel.fromEntity);
  }

  @Query(() => GangModel)
  async gang(@Args('filter') filter: GangFilterOneInput): Promise<GangModel> {
    const matchingGang = await this.gangRepo.findOneOrFail({
      id: filter.id,
    });
    return GangModel.fromEntity(matchingGang);
  }

  @Mutation(() => GangModel)
  async gangCreate(
    @Args('filter') input: GangCreateInput,
    @GetUser() session: UserEntity
  ): Promise<GangModel> {
    await this.userOwnsRoom(session, input.roomID);
    if (input.roomID) {
      await this.userOwnsRoom(session, input.roomID);
    }
    const newGang = await this.gangRepo.create({
      userID: session.id!,
      roomID: input.roomID,
      badge: input.badgeCode,
      displayName: input.name,
      description: input.description,
    });
    return GangModel.fromEntity(newGang);
  }

  @Mutation(() => Boolean)
  async gangUpdate(
    @Args('filter') filter: GangFilterOneInput,
    @Args('filter') input: GangUpdateInput,
    @GetUser() session: UserEntity
  ): Promise<Boolean> {
    const matchingGang: GangModel = await this.gang(filter);
    const doesUserOwnCorp: boolean = matchingGang.id === session.id;
    if (!doesUserOwnCorp) {
      throw new UnauthorizedException();
    }
    await this.gangRepo.update({ id: matchingGang.id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  gangDelete(
    @Args('filter') filter: GangFilterOneInput,
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
