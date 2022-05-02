import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_SERVICE')
    private readonly commentService: ClientProxy,
  ) {}

  getHello() {
    return this.commentService.send<string, string>('get-hello-message', '');
  }

  findAll() {
    return this.commentService.send<string, string>('comment:find-all', '');
  }
}
