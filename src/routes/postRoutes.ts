import express from 'express';
import { createPostHandler, deletePostHandler, getAllPostsHandler, getPostByIdHandler, updatePostHandler } from '../controllers/PostController';


const postRouter = express.Router();

// Get all posts
postRouter.get('/', getAllPostsHandler);

// Create a new post
postRouter.post('/', createPostHandler);

// Get a post by ID
postRouter.get('/:id', getPostByIdHandler);

// Update a post by ID
postRouter.put('/:id', updatePostHandler);

// Delete a post by ID
postRouter.delete('/:id', deletePostHandler);

export default postRouter;
