import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('get-hello-message')
  getHello(): string {
    return this.postService.getHello();
  }

  @MessagePattern('post:find-all')
  findAll() {
    return this.postService.findAll();
  }

  @MessagePattern('post:create-post')
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
}
