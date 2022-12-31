import express, { Router } from 'express';
const router = express.Router();
import { createOrder, getSingleOrder } from '../controllers/orderController.js';
import { isAuth } from '../utils.js';

router.route('/').post(isAuth, createOrder);
router.route('/:id').get(isAuth, getSingleOrder);
export default router;
