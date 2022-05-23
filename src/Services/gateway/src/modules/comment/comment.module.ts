import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMMENT_SERVICE',
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
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
