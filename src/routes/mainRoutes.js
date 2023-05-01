const express = require('express');

const mainController = require('../controller/mainController');


const router = express.Router();

router.get('/', mainController.index);
router.get('/user/login', mainController.login);
router.get('/productCar', mainController.productCar);
router.get('/user/register', mainController.register);
router.get('/nuevoProducto', mainController.nuevoProducto);
router.get('/productEdit',mainController.edit)
module.exports = router;