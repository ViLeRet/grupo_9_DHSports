const express = require('express');

const mainController = require('../controller/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCar', mainController.productCar);
router.get('/productDetail', mainController.producDetail);
router.get('/register', mainController.register);

module.exports = router;