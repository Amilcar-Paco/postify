// Post.ts

import { User } from './User';
import { Category } from './Category';

export interface Post {
    id: number;
    title: string;
    text?: string | null;
    imageUrl?: string | null;
    createdAt: Date;
    categoryId: number | null;
  }  

