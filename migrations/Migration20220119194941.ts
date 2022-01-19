import { Migration } from '@mikro-orm/migrations';

export class Migration20220119194941 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "author" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "terms_accepted" boolean not null, "identities" text[] null, "born" timestamptz(0) null, "favourite_book_id" int4 null, "version" int4 not null default 1);',
    );

    this.addSql(
      'create table "book" ("id" serial primary key, "title" varchar(255) not null, "author_id" int4 not null);',
    );

    this.addSql('create table "author_friends" ("author_1_id" int4 not null, "author_2_id" int4 not null);');
    this.addSql(
      'alter table "author_friends" add constraint "author_friends_pkey" primary key ("author_1_id", "author_2_id");',
    );

    this.addSql(
      'alter table "author" add constraint "author_favourite_book_id_foreign" foreign key ("favourite_book_id") references "book" ("id") on update cascade on delete set null;',
    );

    this.addSql(
      'alter table "book" add constraint "book_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade;',
    );

    this.addSql(
      'alter table "author_friends" add constraint "author_friends_author_1_id_foreign" foreign key ("author_1_id") references "author" ("id") on update cascade on delete cascade;',
    );
    this.addSql(
      'alter table "author_friends" add constraint "author_friends_author_2_id_foreign" foreign key ("author_2_id") references "author" ("id") on update cascade on delete cascade;',
    );
  }
}
