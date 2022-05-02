import { Module } from '@nestjs/common';
import { CommentModule } from './modules';
import { Comment } from './modules/comment/comment.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CommentModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.mysql_host,
      port: 3306,
      username: process.env.mysql_username,
      password: process.env.mysql_password,
      database: process.env.mysql_database,
      entities: [Comment],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
