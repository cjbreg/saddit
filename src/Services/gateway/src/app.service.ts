import { Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('AUTHORIZATION_SERVICE')
    private readonly authorizationService: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello Quan!';
  }

  getTestHello(@Req() request: Request): string {
    return 'Hello ' + request['user']?.email + '!';
  }
}
