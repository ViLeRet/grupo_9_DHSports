const express = require('express');
const path = require('path');

const mainController = require('./routes/main');


const app = express();


const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainController);
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


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});