import { ConfigService } from '@nestjs/config';

export function databaseConfig(configService: ConfigService) {
  return {
    type: configService.get('DIALECT'),
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../database/entities/**/*{.ts,.js}'],
    migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
  };
}
