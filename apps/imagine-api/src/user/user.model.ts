import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../database/user.entity';

@ObjectType()
export class UserModel {
  @Field({ nullable: true })
  id!: number;

  @Field(() => String, { nullable: true })
  username!: string;

  static fromEntity(entity: UserEntity): UserModel {
    return {
      ...entity,
    };
  }
}
