import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Esusgo REST API')
    .setDescription('ESUGO Online Job Listing')
    .setVersion('1.0')
    .addTag('eSugo Online Job listing')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('esugo-api', app, document);

  await app.listen(3000);
}
bootstrap();
