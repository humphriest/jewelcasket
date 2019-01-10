const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for product
const ProductSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  created: { type: Date, default: () => new Date() },
});

//create model for product
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
