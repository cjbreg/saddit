import { Module } from '@nestjs/common';
import { PostModule } from './modules';
import { Post } from './modules/post/post.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: String(process.env.mysql_host),
      port: parseInt(process.env.mysql_port),
      username: String(process.env.mysql_username),
      password: String(process.env.mysql_password),
      database: String(process.env.mysql_database),
      entities: [Post],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
