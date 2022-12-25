import express from 'express';
import data from './data.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
