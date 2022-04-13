import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

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
    return this.userService.emit<CreateUserDto>(
      'user:create-user',
      registerUserDto,
    );
  }

  putUser(updateUserDto: UpdateUserDto) {
    this.userService.emit<string, UpdateUserDto>(
      'user:update-user',
      updateUserDto,
    );
  }
}
