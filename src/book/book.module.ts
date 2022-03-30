import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';

@Module({
  providers: [BookResolver],
  imports: [],
})
export class BookModule {}
