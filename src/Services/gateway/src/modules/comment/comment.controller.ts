import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/get-hello-message')
  getHello() {
    return this.commentService.getHello();
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }
}
