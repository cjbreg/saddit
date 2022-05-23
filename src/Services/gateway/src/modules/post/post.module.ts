import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'POST_SERVICE',
        // transport: Transport.RMQ,
        // options: {
        //   urls: ['amqp://Coen:Password@rabbitmq:5672'],
        //   queue: 'saddit-post-queue',
        //   queueOptions: {
        //     durable: false,
        //   },
        // },
        transport: Transport.TCP,
        options: {
          host: 'post-service',
          port: 5002,
        },
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
