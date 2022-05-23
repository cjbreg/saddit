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
          host: String(process.env.host_user_service),
          port: parseInt(process.env.port_user_service),
        },
      },
      {
        name: 'post-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.host_post_service),
          port: parseInt(process.env.port_post_service),
        },
      },
      {
        name: 'commment-service',
        transport: Transport.TCP,
        options: {
          host: String(process.env.host_comment_service),
          port: parseInt(process.env.port_comment_service),
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
