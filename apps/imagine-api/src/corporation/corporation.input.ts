import { Field, InputType } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { GLOBAL_MAX_RESOURCE_LIMIT } from '../imagine.constant';
import { CorpIndustry, CorpSector } from '../database/corp.entity';

@InputType()
export class CorporationFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class CorporationFilterManyInput {
  @Field(() => [Number], { nullable: true })
  ids?: number[];

  @Field(() => String, { nullable: true })
  nameContains?: string;

  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class CorporationCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  badge!: string;

  @Field(() => Number)
  roomID!: number;

  @Field(() => CorpIndustry)
  industry!: CorpIndustry;

  @Field(() => CorpSector)
  sector!: CorpSector;
}

@InputType()
export class CorporationUpdateInput implements Partial<CorporationCreateInput> {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  badge?: string;

  @Field(() => Number, { nullable: true })
  roomID?: number;
}
