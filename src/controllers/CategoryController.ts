import { Request, Response } from 'express';
import { createCategory, getCategoryById, updateCategory, deleteCategory, getAllCategories } from '../services/CategoryService';
import { Category } from '../../types/Category';

// Get all categories
export const getAllCategoriesHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const categories = await getAllCategories();
      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

// Create a new category or categories
export const createCategoryHandler = async (req: Request, res: Response): Promise<void> => {
    const categoryData: Category[] = req.body;
  
    try {
      // Create an array to store the created categories
      const createdCategories: Category[] = [];
  
      // Iterate over each category object in the request body
      for (const data of categoryData) {
        const { name, description } = data;
  
        const categoryDescription: string | undefined = description as string | undefined;
  
        // Create the category and push it to the createdCategories array
        const category: Category = await createCategory(name, categoryDescription);
        createdCategories.push(category);
      }
  
      // Send the array of created categories in the response
      res.status(201).json(createdCategories);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Get a category by ID
export const getCategoryByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const categoryId: number = parseInt(req.params.id);

  try {
    const category: Category | null = await getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a category
export const updateCategoryHandler = async (req: Request, res: Response): Promise<void> => {
  const categoryId: number = parseInt(req.params.id);
  const { name } = req.body;

  try {
    const updatedCategory: Category | null = await updateCategory(categoryId, name);
    if (!updatedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a category
export const deleteCategoryHandler = async (req: Request, res: Response): Promise<void> => {
  const categoryId: number = parseInt(req.params.id);

  try {
    await deleteCategory(categoryId);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
