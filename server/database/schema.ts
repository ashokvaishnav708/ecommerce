import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  avatarUrl: text('avatar_url'),
  password: text('password').notNull(),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
});

export type User = typeof users.$inferSelect;

export const oAuthUsers = sqliteTable('oauth_users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  avatarUrl: text('avatar_url'),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
});

export type OAuthUser = typeof oAuthUsers.$inferSelect;
