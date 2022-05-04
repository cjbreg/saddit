import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  userId: number;

  @Column()
  content: string;

  @Column()
  subSadditName: string;

  @Column({ default: 0 })
  subSadditId: number;

  @Column({ default: 0 })
  commentsCount: number;

  @Column({ default: 0 })
  upvoteCount: number;

  @Column({ default: 0 })
  downvoteCount: number;

  @CreateDateColumn()
  createdAt: Date;
}
