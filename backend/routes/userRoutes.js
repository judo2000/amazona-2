import express, { Router } from 'express';
const router = express.Router();
import { isAuth, isAdmin } from '../utils.js';
import {
  deleteUserByAdmin,
  getAllUsers,
  getUserById,
  getUserProfile,
  signinUser,
  signupUser,
  updateUserByAdmin,
} from '../controllers/userController.js';

router.route('/').get(isAuth, isAdmin, getAllUsers);
router
  .route('/:id')
  .get(isAuth, isAdmin, getUserById)
  .put(isAuth, isAdmin, updateUserByAdmin)
  .delete(isAuth, isAdmin, deleteUserByAdmin);
router.route('/signin').post(signinUser);
router.route('/signup').post(signupUser);
router.route('/profile').put(isAuth, getUserProfile);

export default router;
