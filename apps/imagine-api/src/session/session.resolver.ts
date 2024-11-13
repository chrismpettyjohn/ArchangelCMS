import { JwtService } from '@nestjs/jwt';
import { GetUser } from './get-user.decorator';
import { SessionService } from './session.service';
import { HasSession } from './has-session.decorator';
import { UserEntity } from '../database/user.entity';
import { UserRepository } from '../database/user.repository';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UnauthorizedException } from '@nestjs/common';
import { SessionCreateWithCredentialsInput, } from './session.input';
import { SessionCreatedModel, SessionModel, SessionSSOModel, } from './session.model';
import { UserModel } from '../user/user.model';

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService
  ) { }

  @ResolveField(() => UserModel)
  async user(@Parent() session: SessionModel): Promise<UserModel> {
    const user = await this.userRepo.findOneOrFail({ id: session.userID });
    return UserModel.fromEntity(user);
  }

  @Mutation(() => SessionSSOModel)
  @HasSession()
  async sessionCreateSSO(
    @GetUser() user: UserEntity
  ): Promise<SessionSSOModel> {
    const newSSO = await this.userRepo.generateSSO(user.id!);
    return {
      ssoToken: newSSO,
    };
  }

  @Query(() => SessionModel)
  async sessionByJWT(@Args('jwt') jwt: string): Promise<SessionModel> {
    const parsedJWT: { sessionID: number } = this.jwtService.decode(jwt) as any;
    if (!parsedJWT) {
      throw new UnauthorizedException();
    }
    return {} as any;
  }

  @Mutation(() => SessionCreatedModel)
  async sessionCreateWithCredentials(
    @Args('input', { type: () => SessionCreateWithCredentialsInput })
    input: SessionCreateWithCredentialsInput,
  ): Promise<SessionCreatedModel> {
    const newSession = await this.sessionService.loginWithEmailAndPassword(
      input.email,
      input.password
    );
    return newSession;
  }

}
