const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compras.html'));
});

app.listen(3500, ()=> {
    console.log('Servidor iniciado en http://localhost:3500');
});