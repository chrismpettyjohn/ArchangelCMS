import {resolve} from 'path';
import {Module} from '@nestjs/common';
import {BanModule} from './ban/ban.module';
import {GraphQLModule} from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {RankModule} from './rank/rank.module';
import {RoomModule} from './room/room.module';
import {PhotoModule} from './photo/photo.module';
import {GroupModule} from './group/group.module';
import {ConfigModule} from './config/config.module';
import {CommonModule} from './common/common.module';
import {GraphQLJSONObject} from 'graphql-type-json';
import {ArticleModule} from './article/article.module';
import {SessionModule} from './session/session.module';
import {ChatlogModule} from './chatlog/chatlog.module';
import {DiscordModule} from './discord/discord.module';
import {FacebookModule} from './facebook/facebook.module';
import {DatabaseModule} from './database/database.module';
import {databaseEntities} from './database/database.const';
import {FriendshipModule} from './friendship/friendship.module';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {WordFilterModule} from './word-filter/word-filter.module';
import {InternationalizationModule} from './internationalization/internationalization.module';
import {
  IMAGINE_DATABASE_HOST,
  IMAGINE_DATABASE_NAME,
  IMAGINE_DATABASE_PASS,
  IMAGINE_DATABASE_USER,
  IMAGINE_GRAPHQL_PLAYGROUND,
} from './imagine.constant';
import {GoogleModule} from './google/google.module';
import {UserBadgeModule} from './user-badge/user-badge.module';
import {SupportTicketModule} from './support-ticket/support-ticket.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';
import {BetaCodeModule} from './beta-code/beta-code.module';
import {StaffApplicationModule} from './staff-application/staff-application.module';
import {RadioRequestModule} from './radio-request/radio-request.module';
import {BugReportModule} from './bug-report/bug-report.module';
import {FurnitureModule} from './furniture/furniture.module';
import {FurniturePurchaseLogModule} from './furniture-purchase-log/furniture-purchase-log.module';
import {FurnitureCommentModule} from './furniture-comment/furniture-comment.module';
import {FurnitureReactionModule} from './furniture-reaction/furniture-reaction.module';
import {UserFurnitureModule} from './user-furniture/user-furniture.module';
import {StorePackageModule} from './store-package/store-package.module';
import {StoreTransactionModule} from './store-transaction/store-transaction.module';
import {StoreTransactionLogModule} from './store-transaction-log/store-transaction-log.module';
import {GangModule} from './gang/gang.module';
import {CorporationModule} from './corporation/corporation.module';
import {CorporationRankModule} from './corporation-rank/corporation-rank.module';
import {CorporationMemberModule} from './corporation-member/corporation-member.module';
import {GangRankModule} from './gang-rank/gang-rank.module';
import {GangMemberModule} from './gang-member/gang-member.module';
import {RPStatsModule} from './rp-stats/rp-stats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: IMAGINE_DATABASE_HOST,
      username: IMAGINE_DATABASE_USER,
      password: IMAGINE_DATABASE_PASS,
      database: IMAGINE_DATABASE_NAME,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: IMAGINE_GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards', 'interceptors'],
      installSubscriptionHandlers: true,
      resolvers: {JSONObject: GraphQLJSONObject},
      subscriptions: {
        'subscriptions-transport-ws': {
          path: '/graphql',
          onConnect: (connectionParams: any) => {
            return {
              req: {
                headers: {
                  Authorization: connectionParams.Authorization,
                  ['X-Forwarded-For']: connectionParams['X-Forwarded-For'],
                },
              },
            };
          },
        },
      },
    }),
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    RankModule,
    ArticleModule,
    ConfigModule,
    BanModule,
    WordFilterModule,
    ChatlogModule,
    RoomModule,
    GroupModule,
    PhotoModule,
    InternationalizationModule,
    DiscordModule,
    FacebookModule,
    GoogleModule,
    FriendshipModule,
    UserBadgeModule,
    SupportTicketModule,
    ForgotPasswordModule,
    BetaCodeModule,
    StaffApplicationModule,
    RadioRequestModule,
    BugReportModule,
    FurnitureModule,
    FurniturePurchaseLogModule,
    FurnitureCommentModule,
    FurnitureReactionModule,
    UserFurnitureModule,
    StorePackageModule,
    StoreTransactionModule,
    StoreTransactionLogModule,
    GangModule,
    GangRankModule,
    GangMemberModule,
    CorporationModule,
    CorporationRankModule,
    CorporationMemberModule,
    RPStatsModule,
  ],
})
export class ImagineModule {}
