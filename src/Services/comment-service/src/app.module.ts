import { Module } from '@nestjs/common';
import { CommentModule } from './modules';
import { Comment } from './modules/comment/comment.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.mysql_host,
      port: parseInt(process.env.mysql_port),
      username: process.env.mysql_username,
      password: process.env.mysql_password,
      database: process.env.mysql_database,
      entities: [Comment],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
