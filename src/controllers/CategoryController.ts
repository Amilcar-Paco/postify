import { Request, Response } from 'express';
import { createCategory, getCategoryById, updateCategory, deleteCategory } from '../services/CategoryService';
import { Category } from '../../types/Category';

// Create a new category
export const createCategoryHandler = async (req: Request, res: Response): Promise<void> => {
  const { name, description } = req.body;

  try {
    const category: Category = await createCategory(name, description);
    res.status(201).json(category);
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
