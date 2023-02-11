const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/compras', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compras.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'));
});

app.listen(3500, ()=> {
    console.log('Servidor iniciado en http://localhost:3500');
});