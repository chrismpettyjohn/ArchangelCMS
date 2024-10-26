import { Field, ObjectType } from '@nestjs/graphql';
import { GangEntity } from '../database/gang.entity';

@ObjectType()
export class GangModel {
  @Field(() => Number, { nullable: true })
  id!: number;

  @Field(() => String, { nullable: true })
  displayName!: string;

  @Field(() => String, { nullable: true })
  description!: string;

  @Field(() => String, { nullable: true })
  badgeCode!: string;

  @Field(() => Number, { nullable: true })
  roomID!: number;

  @Field(() => Number, { nullable: true })
  userID!: number;

  static fromEntity(entity: GangEntity): GangModel {
    return {
      id: entity.id!,
      displayName: entity.displayName,
      description: entity.description,
      badgeCode: entity.badge,
      roomID: entity.roomID,
      userID: entity.userID,
    };
  }
}
