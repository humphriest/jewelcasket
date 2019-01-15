const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Image = require('../models/image');

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

const storage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, 'uploads/');
  },
});
const upload = multer({ storage: storage });

router.route('/products').post(upload.single('file'), (req, res, next) => {
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

router
  .route('/image')
  .post(upload.single('file'), function(req, res, next) {
    console.log(req);
    var new_img = new Image();
    new_img.img.data = fs.readFileSync(req.file.path);
    new_img.img.contentType = 'image/jpeg';
    new_img.save();
    res.json({ message: 'New image added to the db!' });
    next();
  })
  .get(function(req, res) {
    Image.findOne({}, 'img createdAt', function(err, img) {
      if (err) res.send(err);
      // console.log(img);
      res.contentType('json');
      res.send(img);
    }).sort({ createdAt: 'desc' });
    next();
  });

module.exports = router;
