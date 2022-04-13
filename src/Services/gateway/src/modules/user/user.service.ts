import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: ClientProxy,
  ) {}

  getHello() {
    return this.userService.send<string, string>('get-hello-message', '');
  }

  findAll() {
    return this.userService.send<string, string>('user:find-all', '');
  }

  postUser(registerUserDto: CreateUserDto) {
    this.userService.emit<string, CreateUserDto>(
      'user:create-user',
      registerUserDto,
    );
  }
}
