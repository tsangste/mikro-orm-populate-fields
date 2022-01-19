import { Module } from '@nestjs/common';

import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature([Author, Book]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
