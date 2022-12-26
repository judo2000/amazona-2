import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connection.js';

import seedRoutes from './routes/seedRoutes.js';
import productRoutes from './routes/productRoutes.js';

//import data from './data.js';
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/seed', seedRoutes);
app.use('/api/products', productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
