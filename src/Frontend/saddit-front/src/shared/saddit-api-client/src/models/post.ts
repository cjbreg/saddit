export type Post = {
  id: number;
  username: string;
  userId: number;
  content: string;
  subSadditName: string;
  subSadditId: number;
  commentsCount: number;
  upvoteCount: number;
  downvoteCount: number;
  createdAt: Date;
};
