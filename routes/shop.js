const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();



router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {item: products, pageTitle: 'Shop', path:'/shop'});
});




module.exports = router;



