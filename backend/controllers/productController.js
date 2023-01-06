import Product from '../models/ProductModel.js';

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found.' });
  }
};

export { getProducts, getProductBySlug, getProductById };
