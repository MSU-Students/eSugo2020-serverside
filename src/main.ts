import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Esusgo REST API')
    .setDescription('My ESUGO')
    .setVersion('1.0')
    .addTag('job available')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('esugo-api', app, document);

  await app.listen(3000);
}
bootstrap();
