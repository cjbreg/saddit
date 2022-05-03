import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_SERVICE')
    private readonly postService: ClientProxy,
  ) {}

  getHello() {
    return this.postService.send<string, string>('get-hello-message', '');
  }

  findAll() {
    return this.postService.send<string, string>('post:find-all', '');
  }

  create(createPostDto: CreatePostDto) {
    return this.postService.emit<string, CreatePostDto>(
      'post:create-post',
      createPostDto,
    );
  }
}
