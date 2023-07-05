const express = require('express');
const router = express.Router();
const productsApiController = require('../../controller/api/productsApiController');

router.get('/', productsApiController.list);
router.get('/detail/:id', productsApiController.detail);
router.post('/create', productsApiController.create);
router.delete('/delete/:id', productsApiController.delete);

module.exports = router;