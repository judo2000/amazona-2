import express, { Router } from 'express';
const router = express.Router();
import {
  getProducts,
  getProductBySlug,
  getProductById,
  getCategories,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/categories').get(getCategories);
router.route('/slug/:slug').get(getProductBySlug);
router.route('/:id').get(getProductById);

export default router;
