import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://20.54.89.32',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Saddit API service')
    .setDescription('The Saddit API description')
    .setVersion('0.1')
    .addTag('saddit')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
