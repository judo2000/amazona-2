import express, { Router } from 'express';
const router = express.Router();
import {
  createOrder,
  getSingleOrder,
  setOrderToPaid,
} from '../controllers/orderController.js';
import { isAuth } from '../utils.js';

router.route('/').post(isAuth, createOrder);
router.route('/:id').get(isAuth, getSingleOrder);
router.route('/:id/pay').put(isAuth, setOrderToPaid);

export default router;
