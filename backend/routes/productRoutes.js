import express, { Router } from 'express';
const router = express.Router();
import {
  getProducts,
  getProductBySlug,
  getProductById,
} from '../controllers/productController';

router.route('/').get(getProducts);
router.route('/slug/:slug').get(getProductBySlug);
router.route('/:id').get(getProductById);
export default router;
