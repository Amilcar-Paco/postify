// controllers/PostController.ts

import { Request, Response } from 'express';
import { getPostById, getAllPosts, updatePost, createPost, deletePost } from '../services/PostService';
import { Post } from '../../types/Post';

// Get all posts
export const getAllPostsHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const posts = await getAllPosts();
      res.status(200).json(posts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

// Create a new post
export const createPostHandler = async (req: Request, res: Response): Promise<void> => {
  const { title, categoryId, text, imageUrl, category } = req.body;

  try {
    const post: Omit<Post, 'id'> = await createPost( title, categoryId, text, imageUrl, category );
    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a post by ID
export const getPostByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const postId: number = parseInt(req.params.id);

  try {
    const post: Post | null = await getPostById(postId);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a post
export const updatePostHandler = async (req: Request, res: Response): Promise<void> => {
  const postId: number = parseInt(req.params.id);
  const { title, text, imageUrl, categoryId } = req.body;

  try {
    const updatedPost: Post | null = await updatePost(postId, { title, text, imageUrl, categoryId });
    if (!updatedPost) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a post
export const deletePostHandler = async (req: Request, res: Response): Promise<void> => {
  const categoryId: number = parseInt(req.params.id);

  try {
    await deletePost(categoryId);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}