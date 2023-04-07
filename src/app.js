const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs');

const mainController = require('./routes/mainRoutes');
const productsController = require('./controller/productsController');
const productRouter= require('./routes/productsRoutes');

const app = express();


const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());

//Template engine + ruta de acceso a views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routers
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');


app.use('/', mainRoutes);
app.use('/user', userRoutes);



//app.use('/', mainController);
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

app.get('/nuevoProducto', productsController.create)


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});