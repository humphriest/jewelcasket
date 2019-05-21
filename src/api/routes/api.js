const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/products', (req, res, next) => {
  Product.find({})
    .then(data => {
      console.log('get products success');
      console.log(data);
      res.json(data);
      next();
    })
    .catch(err => {
      console.log('get products error');
      console.log(err);
      next();
    });
});

router.get('/products', (req, res, next) => {
  console.log(req.body);

  Product.create(req.body)
    .then(data => {
      console.log('post products success');
      console.log(data);
      res.json(data);
      next();
    })
    .catch(err => {
      console.log('post products error');
      console.log(err);
      res.json(err);
      next();
    });

  next();
});

router.delete('/products/:id', (req, res, next) => {});

module.exports = router;
