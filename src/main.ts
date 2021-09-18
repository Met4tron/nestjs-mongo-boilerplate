import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import env from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(env.PORT);

  Logger.log(`Server ready on port ${env.PORT}`);
}
bootstrap().catch((err) => {
  Logger.error(`Error start server`, err);
});
