const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

const mainController = require('./routes/mainRoutes');
const productsController = require('./controller/productsController');
const productRouter= require('./routes/productsRoutes');

const app = express();


const staticPath = path.resolve(__dirname, './public');
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(staticPath))

app.use('/', mainController);
app.use( '/products',productRouter)


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});