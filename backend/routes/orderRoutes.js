import express, { Router } from 'express';
const router = express.Router();
import { isAuth, isAdmin } from '../utils.js';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMyOrders,
  getOrderSummary,
  getSingleOrder,
  setOrderToDelivered,
  setOrderToPaid,
} from '../controllers/orderController.js';

router.route('/').get(isAuth, isAdmin, getAllOrders);
router.route('/').post(isAuth, createOrder);
router.route('/summary').get(isAuth, isAdmin, getOrderSummary);
router.route('/mine').get(isAuth, getMyOrders);
router.route('/:id').get(isAuth, getSingleOrder);
router.route('/:id/pay').put(isAuth, setOrderToPaid);
router.route('/:id/deliver').put(isAuth, isAdmin, setOrderToDelivered);
router.route('/:id').delete(isAuth, isAdmin, deleteOrder);

export default router;
