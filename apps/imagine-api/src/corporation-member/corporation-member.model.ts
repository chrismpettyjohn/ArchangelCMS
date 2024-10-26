import { Field, ObjectType } from '@nestjs/graphql';
import { RPStatsEntity } from '../database/rp-stats';

@ObjectType()
export class CorporationMemberModel {
  @Field(() => Number, { nullable: true })
  corporationID!: number;

  @Field(() => Number, { nullable: true })
  corporationRankID!: number;

  @Field(() => Number, { nullable: true })
  userID!: number;

  static fromRPStatsEntity(
    rpStatsEntity: RPStatsEntity
  ): CorporationMemberModel {
    return {
      corporationID: rpStatsEntity.corpID!,
      corporationRankID: rpStatsEntity.corpRoleID!,
      userID: rpStatsEntity.id,
    };
  }
}
