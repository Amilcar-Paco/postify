import { PrismaClient } from '@prisma/client';
import { Post } from '../../types/Post';

const prisma = new PrismaClient();


// Create a new post
const createPost = async (title: string, categoryId: number, text?: string, imageUrl?: string, category?: string): Promise<Post> => {
  try {
      // Check if the category exists
      const categoryExists = await prisma.category.findUnique({
        where: {
          id: categoryId
        }
      });

      if (!categoryExists) {
        throw new Error(`Category with ID ${categoryId} does not exist.`);
      }

      // If the category exists, proceed with creating the post
      const createdPost = await prisma.post.create({
          data: {
              title,
              text,
              imageUrl,
              categoryId,
              createdAt: new Date(),
          },
      });
      return createdPost;
  } catch (error: any) {
      throw new Error(`Error creating post: ${error.message}`);
  }
};

// Get all posts
const getAllPosts = async (): Promise<Post[]> => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error: any) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }
};

// Get a post by ID
const getPostById = async (postId: number): Promise<Post | null> => {
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
const updatePost = async (postId: number, post: Partial<Post>): Promise<Post | null> => {
  try {
    // Check if the specified category exists
    if (postId !== undefined) {
      const categoryExists = await prisma.category.findUnique({
        where: {
          id: postId,
        }
      });

      if (!categoryExists) {
        throw new Error(`Category with ID ${post.categoryId} does not exist.`);
      }
    }

    // Proceed with updating the post
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: post
    });

    return updatedPost;
  } catch (error: any) {
    throw new Error(`Error updating post: ${error.message}`);
  }
};

// Delete a post
const deletePost = async (postId: number): Promise<void> => {
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

export { createPost, getAllPosts, getPostById, deletePost, updatePost};
