import process from 'node:process';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const db_url = process.env.DATABASE_URL || './data/ecommerce.db';

export const db = drizzle(db_url);
