import {DiscordService} from './discord.service';
import {DiscordAuthModel} from './discord-auth.model';
import {DiscordAuthInput} from './discord-auth.input';
import {GetIpAddress} from '../utility/get-ip-address';
import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {DiscordAuthService} from './discord-auth.service';

@Resolver(() => DiscordAuthModel)
export class DiscordAuthResolver {
  constructor(private readonly discordAuthService: DiscordAuthService) {}
  @Mutation(() => DiscordAuthModel)
  async discordUserAuthenticate(
    @Args('input', {type: () => DiscordAuthInput}) input: DiscordAuthInput,
    @GetIpAddress() ipAddress: string
  ): Promise<DiscordAuthModel> {
    try {
      const discordService = new DiscordService(input.discordAuthToken);
      const discordUser = await discordService.getUser();
      const sessionToken =
        await this.discordAuthService.discordUserAuthenticate(
          discordUser,
          ipAddress
        );
      return {
        sessionID: sessionToken.session.id!,
        userID: sessionToken.session.userID,
        sessionToken: sessionToken.accessToken,
      };
    } catch (e: any) {
      throw e;
    }
  }
}
