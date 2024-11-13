import { Field, InputType } from '@nestjs/graphql';
import {
  UserCreateInputDTO,
} from '@imagine-cms/types';
import {
  IsEmail,
  MaxLength,
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UserCreateInput implements UserCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  betaCode?: string;
}



@InputType()
export class UserFilterOneInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  username?: string;
}
