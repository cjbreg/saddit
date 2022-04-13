import { Module } from '@nestjs/common';
import { UserModule } from './modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
