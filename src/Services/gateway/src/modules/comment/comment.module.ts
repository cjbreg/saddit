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
        //   urls: [String(process.env.rabbitmq_url)],
        //   queue: String(process.env.rabbitmq_queue_comment),
        //   queueOptions: {
        //     durable: false,
        //   },
        // },
        transport: Transport.TCP,
        options: {
          host: String(process.env.host_comment_service),
          port: parseInt(process.env.port_comment_service),
        },
      },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
