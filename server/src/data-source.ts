// For migrations

import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: './.env' });

export const ds = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/database/entities/**/*{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
});
