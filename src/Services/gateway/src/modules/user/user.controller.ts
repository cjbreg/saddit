import { Controller, Get, Post, Put } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get-hello-message')
  getHello() {
    return this.userService.getHello();
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  registerUser(@Payload() registerUserDto: CreateUserDto) {
    return this.userService.postUser(registerUserDto);
  }

  @Put()
  updateUser(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.putUser(updateUserDto);
  }
}
