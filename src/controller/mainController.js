const path = require('path');

const controller ={
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    login: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    productCar: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productCar.html'));
    },
    producDetail: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    register: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
};

module.exports = controller;