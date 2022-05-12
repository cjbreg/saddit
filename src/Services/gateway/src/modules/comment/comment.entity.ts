import { IsDate, IsNumber, IsNumberString, IsString } from 'class-validator';

export class Comment {
  @IsNumberString()
  id: number;

  @IsString()
  username: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  postId: number;

  @IsString()
  content: string;

  @IsNumber()
  commentsCount: number;

  @IsNumber()
  upvoteCount: number;

  @IsNumber()
  downvoteCount: number;

  @IsDate()
  createdAt: Date;
}
