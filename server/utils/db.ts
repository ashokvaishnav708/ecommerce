import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '#server/database/schema';

// Create the connection to the local file
const client = createClient({ 
  url: 'file:./data/local.db' 
});

export const db = drizzle(client, { schema });
export const tables = schema;
