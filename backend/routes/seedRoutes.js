import express from 'express';

//import Product from '../models/ProductModel.js';
import data from '../data.js';
//import User from '../models/UserModel.js';
import { seedProducts } from '../controllers/seedController.js';

const seedRouter = express.Router();

seedRouter.get('/', seedProducts);

export default seedRouter;
