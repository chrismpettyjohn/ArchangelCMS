import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { GraphQLJSONObject } from 'graphql-type-json';
import { SessionModule } from './session/session.module';
import { DatabaseModule } from './database/database.module';
import { databaseEntities } from './database/database.const';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  IMAGINE_DATABASE_HOST,
  IMAGINE_DATABASE_NAME,
  IMAGINE_DATABASE_PASS,
  IMAGINE_DATABASE_USER,
  IMAGINE_GRAPHQL_PLAYGROUND,
} from './imagine.constant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: IMAGINE_DATABASE_HOST,
      username: IMAGINE_DATABASE_USER,
      password: IMAGINE_DATABASE_PASS,
      database: IMAGINE_DATABASE_NAME,
      entities: [...databaseEntities],
      synchronize: false,
      extra: {
        min: 10,
        max: 40,
      }
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: IMAGINE_GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards', 'interceptors'],
      installSubscriptionHandlers: true,
      resolvers: { JSONObject: GraphQLJSONObject },
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
  ],
})
export class ImagineModule { }
