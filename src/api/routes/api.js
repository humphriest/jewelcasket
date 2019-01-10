const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res, next) => {
  Product.find({}, 'action')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/products', (req, res, next) => {});

router.delete('/products/:id', (req, res, next) => {});

module.exports = router;
