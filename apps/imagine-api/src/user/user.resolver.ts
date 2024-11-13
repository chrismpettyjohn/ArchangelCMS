import { UserModel } from './user.model';
import { IsNull } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { UserEntity } from '../database/user.entity';
import { DEFAULT_USER_VALUES } from './user.constant';
import { UserRepository } from '../database/user.repository';
import DayJS from 'dayjs';
import { BetaCodeRepository } from '../database/beta-code.repository';
import { UserCreateInput, UserFilterOneInput, } from './user.input';
import { Args, Mutation, Query, Resolver, } from '@nestjs/graphql';
import { SessionCreatedModel } from '../session/session.model';
import { SessionService } from '../session/session.service';
import { IMAGINE_BETA_ENABLED } from '../imagine.constant';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly betaCodeRepo: BetaCodeRepository,
    private readonly sessionService: SessionService,
  ) { }

  @Query(() => Number)
  async usersOnlineCount(): Promise<number> {
    const onlineUsers: [{ online_users: number }] = await this.userRepo
      .getInstance()
      .query("SELECT COUNT(*) AS online_users FROM users WHERE online = '1'");
    return onlineUsers[0].online_users;
  }

  @Query(() => UserModel)
  async user(
    @Args('filter', { nullable: true, type: () => UserFilterOneInput })
    filter: UserFilterOneInput
  ): Promise<UserEntity> {
    if (!filter.id && !filter.username) {
      throw new BadRequestException();
    }
    return this.userRepo.findOneOrFail({
      id: filter.id,
      username: filter.username,
    });
  }


  @Mutation(() => SessionCreatedModel)
  async userCreate(
    @Args('input') input: UserCreateInput
  ): Promise<SessionCreatedModel> {

    const matchingBetaCode = IMAGINE_BETA_ENABLED ? await this.betaCodeRepo.findOne({
      where: {
        betaCode: input.betaCode,
        claimedByUserId: IsNull(),
      },
    }) : undefined;

    if (IMAGINE_BETA_ENABLED) {
      if (!matchingBetaCode) {
        throw new BadRequestException('invalid beta code');
      }
    }

    const newUser = await this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      ...input,
      gameSSO: '',
      accountCreatedAt: DayJS().unix(),
      ipLast: '', // TODO: Add support for IPs,
      ipRegistered: '', // TODO: Add support for IPs
      machineAddress: '', // TODO: Add support for machine addresses
    });

    if (IMAGINE_BETA_ENABLED) {
      await this.betaCodeRepo.update(
        { id: matchingBetaCode!.id! },
        { claimedByUserId: newUser.id!, claimedAt: Math.round(+new Date() / 1000) }
      );
    }

    const newSession = await this.sessionService.generateSession(newUser.id!);

    return {
      userID: newUser.id!,
      accessToken: newSession.accessToken,
    };
  }

}
