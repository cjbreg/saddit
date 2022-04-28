import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/get-hello-message')
  getHello() {
    return this.postService.getHello();
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
