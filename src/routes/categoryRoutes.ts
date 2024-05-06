import express from 'express';
import { createCategoryHandler, getCategoryByIdHandler, updateCategoryHandler, deleteCategoryHandler, getAllCategoriesHandler } from '../controllers/CategoryController';

const categoryRouter = express.Router();

// Get all categories
categoryRouter.get('/', getAllCategoriesHandler);

// Create a new category
categoryRouter.post('/', createCategoryHandler);

// Get a category by ID
categoryRouter.get('/:id', getCategoryByIdHandler);

// Update a category by ID
categoryRouter.put('/:id', updateCategoryHandler);

// Delete a category by ID
categoryRouter.delete('/:id', deleteCategoryHandler);

export default categoryRouter;
