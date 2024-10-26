import { Field, ObjectType } from '@nestjs/graphql';
import { CorpRoleEntity } from '../database/corp-role.entity';

@ObjectType()
export class CorpRoleModel {
  @Field(() => Number, { nullable: true })
  id!: number;

  @Field(() => Number, { nullable: true })
  corporationID!: number;

  @Field(() => String, { nullable: true })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string;

  static fromEntity(entity: CorpRoleEntity): CorpRoleModel {
    return {
      id: entity.id!,
      corporationID: entity.corpID,
      name: entity.displayName,
      description: entity.description,
    };
  }
}
