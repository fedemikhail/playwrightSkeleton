import { Pool } from 'pg';
import { env } from '../config/env';

export class DbClient {
  private pool = new Pool({
    host: env.dbHost,
    port: env.dbPort,
    database: env.dbName,
    user: env.dbUser,
    password: env.dbPassword
  });

  async query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
    const result = await this.pool.query(sql, params);
    return result.rows as T[];
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
