import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class FurniturePurchaseLogFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class FurniturePurchaseLogFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  furnitureIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [Number], {nullable: true})
  itemIDs!: number[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}
