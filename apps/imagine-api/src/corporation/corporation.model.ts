import { Field, ObjectType } from '@nestjs/graphql';
import { CorpIndustry, CorpEntity, CorpSector } from '../database/corp.entity';

@ObjectType()
export class CorporationModel {
  @Field(() => Number, { nullable: true })
  id!: number;

  @Field(() => String, { nullable: true })
  displayName!: string;

  @Field(() => String, { nullable: true })
  description!: string;

  @Field(() => String, { nullable: true })
  badge!: string;

  @Field(() => CorpIndustry, { nullable: true })
  industry!: CorpIndustry;

  @Field(() => CorpSector, { nullable: true })
  sector!: CorpSector;

  @Field(() => Number, { nullable: true })
  userID!: number;

  @Field(() => Number, { nullable: true })
  roomID!: number;

  static fromEntity(entity: CorpEntity): CorporationModel {
    return {
      id: entity.id!,
      displayName: entity.displayName,
      description: entity.description,
      badge: entity.badge,
      industry: entity.industry,
      sector: entity.sector,
      userID: entity.userID,
      roomID: entity.roomID,
    };
  }
}
