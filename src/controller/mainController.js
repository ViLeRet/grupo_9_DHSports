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
    productDetail101: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail101.html'));
    },
    productDetail102: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail102.html'));
    },
    productDetail103: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail103.html'));
    },
    productDetail104: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail104.html'));
    },
    productDetail201: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail201.html'));
    },
    productDetail202: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail202.html'));
    },
    productDetail203: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail203.html'));
    },
    productDetail204: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail204.html'));
    },
    productDetail301: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail301.html'));
    },
    productDetail302: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail302.html'));
    },
    productDetail303: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail303.html'));
    },
    productDetail304: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail304.html'));
    },
    productDetail401: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail401.html'));
    },
    productDetail402: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail402.html'));
    },
    productDetail403: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail403.html'));
    },
    productDetail404: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/productDetail404.html'));
    },
    register: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
};

module.exports = controller;