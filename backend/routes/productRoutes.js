import express, { Router } from 'express';
const router = express.Router();
import {
  getProducts,
  getProductBySlug,
  getProductById,
  getCategories,
  searchProducts,
  adminProducts,
} from '../controllers/productController.js';
import { isAdmin, isAuth } from '../utils.js';

router.route('/').get(getProducts);
router.route('/admin').get(isAuth, isAdmin, adminProducts);
router.route('/search').get(searchProducts);
router.route('/categories').get(getCategories);
router.route('/slug/:slug').get(getProductBySlug);
router.route('/:id').get(getProductById);

export default router;
