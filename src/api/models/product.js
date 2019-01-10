const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for product
const ProductSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The product text field is required'],
  },
});

//create model for product
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
