import express, { Router } from 'express';
const router = express.Router();
import { createOrder } from '../controllers/orderController.js';
import { isAuth } from '../utils.js';
router.route('/').post(isAuth, createOrder);

export default router;
