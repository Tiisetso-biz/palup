//init express
import express from 'express';

//import these methods from user controller
import { signin, signup } from '../controllers/user.js';

const router = express.Router();

//authentication routes
router.post('/signin', signin);
router.post('/signup', signup)

export default router;
