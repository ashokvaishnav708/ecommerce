import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  createdTimestamp: integer('created_timestamp', { mode: 'timestamp' })
    .default(new Date()),
});

export type User = typeof users.$inferSelect;
