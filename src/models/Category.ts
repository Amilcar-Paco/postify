import { Post } from './Post';

export interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  posts: Post[];
}

