import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: String(process.env.CORS_ORIGIN),
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
