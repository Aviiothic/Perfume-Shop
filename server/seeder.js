const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Sample products inserted!');
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting data:', error.message);
    process.exit(1);
  }
};

importData();
