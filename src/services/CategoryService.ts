import { PrismaClient } from '@prisma/client';
import { Category } from '../../types/Category';

const prisma = new PrismaClient();

// Create a new category
const createCategory = async (name: string, description?: string): Promise<Category> => {
    try {
      const createdCategory = await prisma.category.create({
        include: {
          posts: true,
        },
        data: {
          name,
          description: description || '', 
          createdAt: new Date(),
          posts: { create: [] },
        },
      });
      return createdCategory;
    } catch (error: any) { // Specify the type of error
      throw new Error(`Error creating category: ${error.message}`);
    }
  };

// Get a category by ID
const getCategoryById = async (categoryId: number): Promise<Category | null> => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        posts: true, // Include associated posts
      },
    });
    return category;
  } catch (error: any) {
    throw new Error(`Error fetching category: ${error.message}`);
  }
};

// Update a category
const updateCategory = async (categoryId: number, name: string): Promise<Category | null> => {
    try {
      const updatedCategory = await prisma.category.update({
        where: {
          id: categoryId,
        },
        include: {
          posts: true, // Include associated posts
        },
        data: {
          name,
          // If you're not updating posts, include the existing posts to satisfy the type requirements
          posts: { connect: [] }, // Connects existing posts
        },
      });
      return updatedCategory;
    } catch (error: any) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  };
  
// Delete a category
const deleteCategory = async (categoryId: number): Promise<void> => {
  try {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  } catch (error: any) {
    throw new Error(`Error deleting category: ${error.message}`);
  }
};

export { createCategory, getCategoryById, updateCategory, deleteCategory };
