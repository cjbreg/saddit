import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  getHello(): string {
    return 'Hello Comment service';
  }

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }
}
