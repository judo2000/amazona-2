import express, { Router } from 'express';
const router = express.Router();
import { isAuth } from '../utils.js';
import {
  createOrder,
  getMyOrders,
  getSingleOrder,
  setOrderToPaid,
} from '../controllers/orderController.js';

router.route('/').post(isAuth, createOrder);
router.route('/mine').get(isAuth, getMyOrders);
router.route('/:id').get(isAuth, getSingleOrder);
router.route('/:id/pay').put(isAuth, setOrderToPaid);

export default router;
