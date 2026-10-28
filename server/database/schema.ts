import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  avatarUrl: text('avatar_url'),
  password: text('password'),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at'),
});

export type User = typeof users.$inferSelect;

export const oAuthUsers = sqliteTable('oauth_users', {
  id: integer('id').primaryKey().references(() => users.id),
  providerUserId: text('provider_user_id').notNull(),
  providerId: text('provider_id').notNull(),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at'),
});

export type OAuthUser = typeof oAuthUsers.$inferSelect;
