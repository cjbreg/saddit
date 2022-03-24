import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('AUTHORIZATION_SERVICE')
    private readonly authorizationService: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
