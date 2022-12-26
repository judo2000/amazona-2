import express, { Router } from 'express';
const router = express.Router();
import { signinUser } from '../controllers/userController.js';

router.route('/signin').post(signinUser);

export default router;
