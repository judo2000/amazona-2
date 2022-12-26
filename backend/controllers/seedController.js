import Product from '../models/ProductModel.js';
import data from '../data.js';

const seedProducts = async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  //await User.remove({});
  //const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts });
};

export { seedProducts };
