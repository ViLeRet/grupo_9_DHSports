const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs'); 
require('dotenv').config();

const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const productsController = require('./controller/productsController');
const productRouter= require('./routes/productsRoutes');

const app = express();


const staticPath = path.join(__dirname, './public');
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


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(staticPath))

app.use('/', mainRouter);
app.use( '/',productRouter)
app.use('/', userRouter);


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});