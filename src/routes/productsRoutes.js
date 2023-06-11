const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

const productsController = require('../controller/productsController');
const newProductController = require('../controller/newProductController');

router.get('/compras', (req, res) => {
    res.render('compras');


});
router.get('/comprasbasket', (req, res) => {
    res.render('comprasbasket');


});
router.get('/comprasnatacion', (req, res) => {
    res.render('comprasnatacion');


});
router.get('/productDetail', (req, res)=>{
    res.render('/productDetail')
})
router.get('/comprasfutbol', (req, res) => {
    res.render('comprasfutbol');

});

//Nuevas rutas para relacionar a la DB
router.get('/addProduct', newProductController.add)
router.post('/store', newProductController.store);

//Rutas antiguas relacionadas a archivos JSON

router.get('/productEdit/:id', productsController.edit)
router.put('/update/:id', productsController.update)
router.post('/productEdit',productsController.edit)

router.get('/', productsController.index);

router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);


router.get('/productDetail', productsController.productDetail)
router.get('/productDetail/:id', productsController.detail);

router.get('/productDetail/edit/:id', productsController.edit); 
router.put('/productDetail/productEdit/:id', upload.single('image'), productsController.update); 


router.delete('/destroy/:id', productsController.destroy); 


module.exports = router;