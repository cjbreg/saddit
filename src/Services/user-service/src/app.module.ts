import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';

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
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
