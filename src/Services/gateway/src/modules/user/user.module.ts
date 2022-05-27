import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        // transport: Transport.RMQ,
        // options: {
        //   urls: [String(process.env.rabbitmq_url)],
        //   queue: String(process.env.rabbitmq_queue_user),
        //   queueOptions: {
        //     durable: false,
        //   },
        // },
        transport: Transport.TCP,
        options: {
          host: String(process.env.host_user_service),
          port: parseInt(process.env.port_user_service),
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
