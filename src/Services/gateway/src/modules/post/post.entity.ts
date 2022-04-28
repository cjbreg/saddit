import { IsDate, IsNumber, IsNumberString, IsString } from 'class-validator';

export class Post {
  @IsNumberString()
  id: number;

  @IsString()
  username: string;

  @IsString()
  userId: string;

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
