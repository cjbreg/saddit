import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Quan!';
  }

  getTestHello(@Req() request: Request): string {
    return 'Hello0 ' + request['user']?.email + '!';
  }
}
