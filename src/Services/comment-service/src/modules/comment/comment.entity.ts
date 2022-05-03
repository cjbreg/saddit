import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  userId: number;

  @Column()
  postId: number;

  @Column()
  content: string;

  @Column({ default: 0 })
  commentsCount: number;

  @Column({ default: 0 })
  upvoteCount: number;

  @Column({ default: 0 })
  downvoteCount: number;

  @CreateDateColumn()
  createdAt: Date;
}
