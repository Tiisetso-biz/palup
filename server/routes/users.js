//init express
import express from 'express';

//import these methods from user controller
import { signin, signup, adminSignup, getAllUsers, suspendUser, unsuspendUser } from '../controllers/user.js';

const router = express.Router();

//authentication routes
router.post('/signin', signin);
router.post('/signup', signup)
router.post("/admin/signup", adminSignup);
router.get("/users", getAllUsers);
router.patch("/users/:userId/suspend", suspendUser);
router.patch("/users/:userId/unsuspend", unsuspendUser);

export default router;
