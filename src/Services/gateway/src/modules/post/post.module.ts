import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'POST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [String(process.env.rabbitmq_url)],
          queue: String(process.env.rabbitmq_queue_post),
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
