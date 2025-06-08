const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  shortDescription: String,
  price: Number,
  sizes: [String],
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);