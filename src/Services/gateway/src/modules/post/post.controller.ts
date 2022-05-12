import { Controller, Get, Param, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { CreatePostDto } from './dto/create-post.dto';
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

  @Post()
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get('/new')
  findAllInOrder() {
    return this.postService.findAllInOrder();
  }

  @Get('/subsaddit/:subname')
  findAllFromSub(@Param('subname') subname: string) {
    return this.postService.findAllFromSub(subname);
  }
}
