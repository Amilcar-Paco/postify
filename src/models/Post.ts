// Post.ts

import { User } from './User';
import { Category } from './Category';

export interface Post {
  id: number;
  title: string;
  text?: string;
  imageUrl?: string;
  createdAt: Date;
  author: User;
  category?: Category;
}

