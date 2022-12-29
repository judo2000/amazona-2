import express, { Router } from 'express';
const router = express.Router();
import { signinUser, signupUser } from '../controllers/userController.js';

router.route('/signin').post(signinUser);
router.route('/signup').post(signupUser);

export default router;
