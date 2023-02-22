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
    producDetail: (req, res)=> {
        res.render('productDetail');
        
    },
    productDetail101: (req, res)=> {
        res.render('productDetail101');
        
    },
    productDetail102: (req, res)=> {
        res.render('productDetail102');

    },
    productDetail103: (req, res)=> {
        res.render('productDetail103');

    },
    productDetail104: (req, res)=> {
        res.render('productDetail104');

    },
    productDetail201: (req, res)=> {
        res.render('productDetail201');

    },
    productDetail202: (req, res)=> {
        res.render('productDetail202');

    },
    productDetail203: (req, res)=> {
        res.render('productDetail203');

    },
    productDetail204: (req, res)=> {
        res.render('productDetail204');
        
    },
    productDetail301: (req, res)=> {
        res.render('productDetail301');

    },
    productDetail302: (req, res)=> {
        res.render('productDetail302');

    },
    productDetail303: (req, res)=> {
        res.render('productDetail303');

    },
    productDetail304: (req, res)=> {
        res.render('productDetail304');

    },
    productDetail401: (req, res)=> {
        res.render('productDetail401');

    },
    productDetail402: (req, res)=> {
        res.render('productDetail402');

    },
    productDetail403: (req, res)=> {
        res.render('productDetail403');

    },
    productDetail404: (req, res)=> {
        res.render('productDetail404');

    },
    register: (req, res)=> {
        res.render('register');
        
    }
};

module.exports = controller;