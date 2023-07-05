const express = require('express');
const router = express.Router();
const userApiController = require('../../controller/api/userApiController');

router.get('/', userApiController.list);
router.get('/detail/:id', userApiController.detail);
router.post('/create', userApiController.create);
router.delete('/delete/:id', userApiController.delete);

module.exports = router;