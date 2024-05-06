import { PrismaClient } from '@prisma/client';
import { Post } from '../../types/Post';

const prisma = new PrismaClient();
/*
// Create a new post
export const createPost = async (post: Post): Promise<Post> => {
  try {
    const postData: Post = {
      title: post.title,
      text: post.text,
      imageUrl: post.imageUrl,
      categoryId: post.category ? post.category.id : undefined,
     // createdAt: undefined
    };

    const createdPost = await prisma.post.create({
      data: postData,
    });
    return createdPost;
  } catch (error: any) {
    throw new Error(`Error creating post: ${error.message}`);
  }
};

// Get a post by ID
export const getPostById = async (postId: number): Promise<Post | null> => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return post;
  } catch (error: any) {
    throw new Error(`Error fetching post: ${error.message}`);
  }
};

// Update a post
export const updatePost = async (postId: number, updatedPostData: Post): Promise<Post | null> => {
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: updatedPostData,
    });
    return updatedPost;
  } catch (error: any) {
    throw new Error(`Error updating post: ${error.message}`);
  }
};

// Delete a post
export const deletePost = async (postId: number): Promise<void> => {
  try {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
  } catch (error: any) {
    throw new Error(`Error deleting post: ${error.message}`);
  }
};
*/