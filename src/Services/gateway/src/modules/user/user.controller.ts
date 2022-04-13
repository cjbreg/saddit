import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get-hello-message')
  getHello() {
    return this.userService.getHello();
  }

  @Get('/get-all')
  findAll() {
    return this.userService.findAll();
  }
}
