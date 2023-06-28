const db = require('../database/models');
const controller = {
    // list: (req, res) => {
    //     res.render('index');
    // },
    
    add: (req, res) => {
        res.render('addProduct');
    },
create: async (req, res) => {
    try {
        const productToCreate = {
            name: req.body.name,
            descrption: req.body.descrption,
            price: req.body.price,
            discount: req.body.discount,
            images: req.body.images,
            size: req.body.size,
            color: req.body.color,
            category: req.body.category,
            brand: req.body.brand
        }
        await db.Product.create(productToCreate);
        res.redirect('/')
    } catch (err) {
        res.send(err);
    }
}
}
module.exports = controller;