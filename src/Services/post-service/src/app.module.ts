import { Module } from '@nestjs/common';
import { PostModule } from './modules';
import { Post } from './modules/post/post.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.mysql_host,
      port: parseInt(process.env.mysql_port),
      username: process.env.mysql_username,
      password: process.env.mysql_password,
      database: process.env.mysql_database,
      entities: [Post],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
