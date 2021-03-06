import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [String(process.env.rabbitmq_url)],
        queue: String(process.env.rabbitmq_queue),
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
