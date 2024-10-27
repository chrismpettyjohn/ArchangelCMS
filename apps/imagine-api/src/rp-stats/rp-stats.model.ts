import { Field, ObjectType } from '@nestjs/graphql';
import { RPStatsEntity } from '../database/rp-stats';

@ObjectType()
export class RPStatsModel {
  @Field(() => Number, { nullable: true })
  userID!: number;

  @Field(() => Number, { nullable: true })
  healthCurrent!: number;

  @Field(() => Number, { nullable: true })
  healthMax!: number;

  @Field(() => Number, { nullable: true })
  energyCurrent!: number;

  @Field(() => Number, { nullable: true })
  energyMax!: number;

  @Field(() => Number, { nullable: true })
  armorCurrent!: number;

  @Field(() => Number, { nullable: true })
  armorMax!: number;

  @Field(() => Number, { nullable: true })
  hungerCurrent!: number;

  @Field(() => Number, { nullable: true })
  hungerMax!: number;

  @Field(() => Number, { nullable: true })
  corporationID?: number;

  @Field(() => Number, { nullable: true })
  corporationRankID?: number;

  @Field(() => Number, { nullable: true })
  gangID?: number;

  static fromEntity(entity: RPStatsEntity): RPStatsModel {
    return {
      userID: entity.id,
      healthCurrent: entity.healthCurrent,
      healthMax: entity.healthMax,
      energyCurrent: entity.energyCurrent,
      energyMax: entity.energyMax,
      armorCurrent: entity.armorCurrent,
      armorMax: entity.armorMax,
      hungerCurrent: entity.hungerCurrent,
      hungerMax: entity.hungerMax,
      corporationID: entity.corpID!,
      corporationRankID: entity.corpRoleID,
      gangID: entity.gangID,
    };
  }
}
