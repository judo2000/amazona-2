import express from 'express';
import multer from 'multer';
import { uploadProductImg } from '../controllers/uploadController.js';
import { isAdmin, isAuth } from '../utils.js';

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),
  uploadProductImg
);

export default uploadRouter;
