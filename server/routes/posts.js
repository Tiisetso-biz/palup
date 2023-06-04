//initialise express
import express from 'express';

//import all our post functions from the posts controller
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost, commentPost } from '../controllers/posts.js';

//import the middleware
import auth from '../middleware/auth.js'

//declare router for routes
const router = express.Router();

//all neccessary routes for posts
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

//make this available outside this module
export default router; 