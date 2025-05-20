export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  content: string;
  date: string;
}