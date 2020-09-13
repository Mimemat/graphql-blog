import { ConnectionOptions } from 'typeorm';

export const databaseConfig: ConnectionOptions = {
  type: 'sqlite',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  database: './db.sqlite3',
};
