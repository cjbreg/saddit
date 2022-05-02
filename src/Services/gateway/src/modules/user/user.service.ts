import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    return this.userService.emit<string, UpdateUserDto>(
      'user:update-user',
      updateUserDto,
    );
  }

  findUserByUid(uid: string) {
    return this.userService.emit('user:find-by-uid', uid);
  }
}
