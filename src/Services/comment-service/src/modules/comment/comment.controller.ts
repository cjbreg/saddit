import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommentService } from './comment.service';

@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @MessagePattern('get-hello-message')
  getHello(): string {
    return this.commentService.getHello();
  }

  @MessagePattern('comment:find-all')
  findAll() {
    return this.commentService.findAll();
  }
}
