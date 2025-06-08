const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const products = [
  {
    name: 'Blossom Breeze',
    description: 'An enchanting floral fragrance that captures the fresh bloom of spring in a bottle.',
    shortDescription: 'Fresh floral breeze with spring notes',
    price: 2899, // INR
    sizes: ['30ml', '50ml', '100ml'],
    images: [
      'https://images.unsplash.com/photo-1653550943878-393a412372c1?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1656859936789-aa96c7c5efbe?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1491410681484-62f2f490ea6a?q=80&auto=format&fit=crop&w=800',
    ],
    category: 'Floral',
  },
  {
    name: 'Floral Fantasy',
    description: 'A romantic and vibrant blend of blooming flowers, perfect for daytime wear.',
    shortDescription: 'Romantic floral blend with vibrant aroma',
    price: 2599,
    sizes: ['50ml', '100ml'],
    images: [
      'https://images.unsplash.com/photo-1523308458373-c6f61ae1fd21?q=80&auto=format&fit=crop&w=800',
      'https://plus.unsplash.com/premium_photo-1676478746755-e4a3b46edfbf?q=80&auto=format&fit=crop&w=800',
    ],
    category: 'Floral',
  },
  {
    name: 'Petal Mist',
    description: 'Soft floral mist with a hint of morning dew, subtle and graceful.',
    shortDescription: 'Subtle floral mist with morning freshness',
    price: 3199,
    sizes: ['30ml', '60ml'],
    images: [
      'https://images.unsplash.com/photo-1734702239355-c07abd436421?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1688559715401-6038bdc29e33?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1701153033009-7f334966b307?q=80&auto=format&fit=crop&w=800',
    ],
    category: 'Floral',
  },
  {
    name: 'Citrus Garden',
    description: 'Lively citrus fragrance inspired by zesty oranges and lemon blossoms.',
    shortDescription: 'Zesty and energetic citrus scent',
    price: 2399,
    sizes: ['50ml', '100ml'],
    images: [
      'https://images.unsplash.com/photo-1609196119588-15e77a42bf70?q=80&auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1704696551649-789046466094?q=80&auto=format&fit=crop&w=800',
      'https://plus.unsplash.com/premium_photo-1664391797270-9451ed0426b1?q=80&auto=format&fit=crop&w=800',
    ],
    category: 'Citrus',
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Sample perfume products inserted (INR, cropped images)!');
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting data:', error.message);
    process.exit(1);
  }
};

importData();
