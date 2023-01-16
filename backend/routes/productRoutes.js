import express, { Router } from 'express';
const router = express.Router();
import {
  getProducts,
  getProductBySlug,
  getProductById,
  getCategories,
  searchProducts,
  adminProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createReview,
} from '../controllers/productController.js';
import { isAdmin, isAuth } from '../utils.js';

router.route('/').get(getProducts);
router.route('/').post(createProduct);
router
  .route('/:id')
  .put(isAuth, isAdmin, updateProduct)
  .delete(isAuth, isAdmin, deleteProduct);
router.route('/:id/reviews').post(isAuth, createReview);
router.route('/admin').get(isAuth, isAdmin, adminProducts);
router.route('/search').get(searchProducts);
router.route('/categories').get(getCategories);
router.route('/slug/:slug').get(getProductBySlug);
router.route('/:id').get(getProductById);

export default router;
