import { ArgsType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ArgsType()
export class BookArgs {
  @Field()
  @MinLength(3)
  title: string;
}
