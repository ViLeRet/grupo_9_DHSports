const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

const productsController = require('../controller/productsController');

router.get('/', productsController.index);

router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);

router.get('/productDetail/:id', productsController.detail);

router.get('/edit/:id', productsController.edit); 
router.put('/:id', upload.single('image'), productsController.update); 


router.delete('/:id', productsController.destroy); 


module.exports = router;
