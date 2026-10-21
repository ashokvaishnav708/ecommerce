import process from 'node:process';
import { defineConfig } from 'drizzle-kit';

const db_url = process.env.DATABASE_URL;

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: db_url,
  },
});
