import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const _config = {
  title: 'Planner API',
  description: 'API для приложения по управлению финансами',
  version: '1.0.0',
  url: 'api/docs',
};

const config = new DocumentBuilder()
  .setTitle(_config.title)
  .setDescription(_config.description)
  .setVersion(_config.version)
  .build();

export const swagger = (app: INestApplication<any>) => {
  const doc = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });
  return SwaggerModule.setup(_config.url, app, doc);
};
