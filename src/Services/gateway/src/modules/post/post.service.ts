import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

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
}
