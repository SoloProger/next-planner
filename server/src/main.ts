import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  swagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
