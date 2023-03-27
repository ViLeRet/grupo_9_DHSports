

const path = require('path');

const controller ={
    index: (req, res) => {
        res.render('index');
    },
    
    productCar: (req, res)=> {
        res.render('productCar');
        
    },
   
    nuevoProducto: (req, res) => {
        res.render('nuevoProducto')
    }
};

module.exports = controller;