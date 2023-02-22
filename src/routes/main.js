const express = require('express');

const mainController = require('../controller/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCar', mainController.productCar);
router.get('/productDetail', mainController.producDetail);
router.get('/productDetail101', mainController.productDetail101);
router.get('/productDetail102', mainController.productDetail102);
router.get('/productDetail103', mainController.productDetail103);
router.get('/productDetail104', mainController.productDetail104);
router.get('/productDetail201', mainController.productDetail201);
router.get('/productDetail202', mainController.productDetail202);
router.get('/productDetail203', mainController.productDetail203);
router.get('/productDetail204', mainController.productDetail204);
router.get('/productDetail301', mainController.productDetail301);
router.get('/productDetail302', mainController.productDetail302);
router.get('/productDetail303', mainController.productDetail303);
router.get('/productDetail304', mainController.productDetail304);
router.get('/productDetail401', mainController.productDetail401);
router.get('/productDetail402', mainController.productDetail402);
router.get('/productDetail403', mainController.productDetail403);
router.get('/productDetail404', mainController.productDetail404);
router.get('/register', mainController.register);

module.exports = router;