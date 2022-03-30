import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/book';
import { BookArgs } from './dto/updateBook.args';

@Resolver((of) => Book)
export class BookResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation((returns) => Book)
  async updateBook(@Args() args: BookArgs) {
    return { title: 'hello' };
  }
}
