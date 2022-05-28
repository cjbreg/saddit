import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'COMMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [String(process.env.rabbitmq_url)],
          queue: String(process.env.rabbitmq_queue_comment),
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
