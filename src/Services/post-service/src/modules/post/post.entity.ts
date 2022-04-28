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
  postText: string;

  @CreateDateColumn()
  createdAt: Date;
}
