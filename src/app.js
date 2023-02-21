const express = require('express');
const path = require('path');

const mainController = require('./routes/mainRoutes');

const app = express();

app.set('views engine', 'ejs');

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.use('/', mainController);
app.get('/compras', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compras.html'));
});
app.get('/comprasbasket', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/comprasbasket.html'));
});
app.get('/comprasnatacion', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/comprasnatacion.html'));
});
app.get('/comprasfutbol', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/comprasfutbol.html'));
});


const port = process.env.PORT || 3500;
app.listen(port,()=>{
    console.log(`server starter on: http://localhost:${port}`);
});