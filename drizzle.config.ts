import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite', // Changed from 'postgresql'
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: 'file:./data/ecommerce.db', // This defines where the file lives
  },
});