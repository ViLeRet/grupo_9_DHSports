const express = require('express');
const router = express.Router();
const productsApiController = require ('../../controller/api/productsApiController');

router.get('/', productsApiController.list);

module.exports = router;

