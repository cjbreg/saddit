import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://Coen:Password@rabbitmq:5672'],
      queue: 'saddit-user-queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen();
}
bootstrap();
