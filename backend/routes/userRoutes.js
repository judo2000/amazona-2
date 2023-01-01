import express, { Router } from 'express';
const router = express.Router();
import { isAuth } from '../utils.js';
import {
  getUserProfile,
  signinUser,
  signupUser,
} from '../controllers/userController.js';

router.route('/signin').post(signinUser);
router.route('/signup').post(signupUser);
router.route('/profile').put(isAuth, getUserProfile);

export default router;
