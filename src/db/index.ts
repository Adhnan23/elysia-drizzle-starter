import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { ENV } from '@utils';

const client = createClient({ url: ENV.DB_FILE_NAME });
const db = drizzle({ client, logger: ENV.ENVIRONMENT === 'development' });

export default db;