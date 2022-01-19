import { Injectable, OnModuleInit } from '@nestjs/common';

import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(Author) private readonly authorRepository: EntityRepository<Author>,
    @InjectRepository(Book) private readonly bookRepository: EntityRepository<Book>,
  ) {}

  async onModuleInit() {
    let author = await this.authorRepository.findOne({ name: 'Test Author' });
    if (!author) {
      author = new Author();
      author.name = 'Test Author';
      author.email = 'test@test.com';
      author.termsAccepted = true;

      await this.authorRepository.persistAndFlush(author);
    }

    let book1 = await this.bookRepository.findOne({ title: 'book1' });
    if (!book1) {
      book1 = new Book();
      book1.title = 'book1';
      book1.author = author;

      await this.bookRepository.persistAndFlush(book1);
    }

    let book2 = await this.bookRepository.findOne({ title: 'book2' });
    if (!book2) {
      book2 = new Book();
      book2.title = 'book2';
      book2.author = author;

      await this.bookRepository.persistAndFlush(book2);
    }
  }

  normal() {
    return this.authorRepository.find(
      {},
      {
        populate: ['books'],
      },
    );
  }

  fields1() {
    return this.authorRepository.find(
      {},
      {
        populate: ['books'],
        fields: ['name', 'email', 'books', 'books.title'],
      },
    );
  }

  fields2() {
    return this.authorRepository.find(
      {},
      {
        populate: ['books'],
        fields: ['name', 'email', 'books.title'],
      },
    );
  }
}
