import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';

export class Database {
  public static async initialize() {
    return this.connection().initialize().then(() => console.log('Database initialized!'));
  }

  public static repository(entity: EntityTarget<ObjectLiteral>) {
    return this.connection().getRepository(entity);
  }

  private static connection() {
    return new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      logging: false,
      entities: [__dirname + '/../database/entities/**/*{.ts,.js}'],
      migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
    });

  };
}

