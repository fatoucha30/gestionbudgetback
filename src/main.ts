import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activation des CORS pour permettre les requêtes depuis d'autres origines
  app.enableCors();
  
  await app.listen(23000);
}
bootstrap();
