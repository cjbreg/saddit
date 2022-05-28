import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [String(process.env.rabbitmq_url)],
      queue: String(process.env.rabbitmq_queue),
      queueOptions: {
        durable: false,
      },
    },
    // transport: Transport.TCP,
    // options: {
    //   host: String(process.env.service_host),
    //   port: parseInt(process.env.service_port),
    // },
  });
  app.listen();
}
bootstrap();
