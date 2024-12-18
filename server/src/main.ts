import { NestFactory } from '@nestjs/core';
import { swagger } from './config/swagger.config';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.enableCors();
  app.setGlobalPrefix('/api');

  swagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
