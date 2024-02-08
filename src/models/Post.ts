export interface Post {
  postId: string;
  filename: string;
  username: string;
  caption: string;
  date: string;
  likes: number;
  comments: Comment[];
}
