import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // transport: Transport.RMQ,
      // options: {
      //   urls: ['amqp://Coen:Password@rabbitmq:5672'],
      //   queue: 'saddit-comment-queue',
      //   queueOptions: {
      //     durable: false,
      //   },
      // },
      transport: Transport.TCP,
      options: {
        host: 'comment-service',
        port: 5003,
      },
    },
  );
  app.listen();
}
bootstrap();
