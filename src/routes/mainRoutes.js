const express = require('express');

const mainController = require('../controller/mainController');


const router = express.Router();

router.get('/', mainController.index);

router.get('/productCar', mainController.productCar);

router.get('/nuevoProducto', mainController.nuevoProducto);
router.get('/productEdit',mainController.edit)
module.exports = router;