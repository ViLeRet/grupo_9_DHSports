const express = require('express');
const router = express.Router();
const productsApiController = require('../../controller/api/productsApiController');

router.get('/', productsApiController.list);
router.get('/detail/:id', productsApiController.detail);
router.post('/create', (req, res) => {
  productsApiController.create(req, res); // Llama a la función productsApiController.create
});
router.delete('/delete/:id', (req, res) => {
    productsApiController.delete(req, res); // Llama a la función productsApiController.delete
  });

module.exports = router;

  