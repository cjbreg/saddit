import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-hello-message')
  getHello(): string {
    return this.userService.getHello();
  }

  @MessagePattern('user:find-all')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('user:create-user')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('user:update-user')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }
}
