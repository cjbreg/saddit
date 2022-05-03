import { IsDate, IsNumber, IsNumberString, IsString } from 'class-validator';

export class Post {
  @IsNumberString()
  id: number;

  @IsString()
  username: string;

  @IsNumber()
  userId: number;

  @IsString()
  content: string;

  @IsString()
  subSadditName: string;

  @IsNumber()
  subSadditId: number;

  @IsNumber()
  commentsCount: number;

  @IsNumber()
  upvoteCount: number;

  @IsNumber()
  downvoteCount: number;

  @IsDate()
  createdAt: Date;
}
