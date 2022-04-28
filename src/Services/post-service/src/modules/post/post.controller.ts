import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('get-hello-message')
  getHello(): string {
    return this.postService.getHello();
  }

  @MessagePattern('user:find-all')
  findAll() {
    return this.postService.findAll();
  }
}
