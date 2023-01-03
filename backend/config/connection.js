// const mongoose = require('mongoose');

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect('mongodb://127.0.0.1/amazona2', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1/amazona2', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
//   // useFindAndModify: true,
// });

// module.exports = connectDB;
export default connectDB;
