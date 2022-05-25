import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.mysql_host,
      port: parseInt(process.env.mysql_port),
      username: process.env.mysql_username,
      password: process.env.mysql_password,
      database: process.env.mysql_database,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
