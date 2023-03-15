

const path = require('path');

const controller ={
    index: (req, res) => {
        res.render('index');
    },
    
    login: (req, res)=> {
        res.render('login');
        
    },
    productCar: (req, res)=> {
        res.render('productCar');
        
    },
   
    register: (req, res)=> {
        res.render('register');
        
    },
    nuevoProducto: (req, res) => {
        res.render('nuevoProducto')
    }
};

module.exports = controller;