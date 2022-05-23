import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreauthMiddleware } from './auth/preauth.middleware';
import { PostModule, UserModule, CommentModule } from './modules';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'user-service',
        transport: Transport.TCP,
        options: {
          host: 'user-service',
          port: 5001,
        },
      },
      {
        name: 'post-service',
        transport: Transport.TCP,
        options: {
          host: 'post-service',
          port: 5002,
        },
      },
      {
        name: 'commment-service',
        transport: Transport.TCP,
        options: {
          host: 'comment-service',
          port: 5003,
        },
      },
    ]),
    UserModule,
    PostModule,
    CommentModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
