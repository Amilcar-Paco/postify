import { Post } from './Post';

export interface Category {
  id: number;
  name: string;
  description?: string | null;
  createdAt: Date;
  posts: Post[];
}

