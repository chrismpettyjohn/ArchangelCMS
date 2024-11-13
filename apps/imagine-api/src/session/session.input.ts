import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SessionCreateWithCredentialsInput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;
}