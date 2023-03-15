const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

const mainController = require('./routes/main');
const productRouter= require('./routes/products')

const app = express();


const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainController);
app.use(productRouter)
app.get('/compras', (req, res) => {
    res.render('compras');


});
app.get('/comprasbasket', (req, res) => {
    res.render('comprasbasket');


});
app.get('/comprasnatacion', (req, res) => {
    res.render('comprasnatacion');


});
app.get('/comprasfutbol', (req, res) => {
    res.render('comprasfutbol');

});
app.get('/nuevoProducto', (req, res) => { //ruta nuevo producto//
    res.render('nuevoProducto');
});


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});