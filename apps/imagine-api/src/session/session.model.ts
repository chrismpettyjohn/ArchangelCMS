import { Field, ObjectType } from '@nestjs/graphql';
import { SessionCreatedWire, SessionWire } from '@imagine-cms/types';

@ObjectType()
export class SessionModel implements SessionWire {
  @Field({ nullable: true })
  userID!: number;

  @Field({ nullable: true })
  createdAt!: string;

  @Field({ nullable: true })
  updatedAt!: string;
}

@ObjectType()
export class SessionCreatedModel implements SessionCreatedWire {
  @Field({ nullable: true })
  userID!: number;

  @Field({ nullable: true })
  accessToken!: string;
}

@ObjectType()
export class SessionSSOModel {
  @Field()
  ssoToken!: string;
}
