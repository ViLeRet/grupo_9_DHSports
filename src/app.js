const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs'); 
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('dh_sports', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

});
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const productsController = require('./controller/productsController');
const productRouter= require('./routes/productsRoutes');
const { log } = require('console');

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
app.use( '/products',productRouter)
app.use('/user', userRouter);

app.get('/api/products', productsController.list);

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`server starter on: http://localhost:${port}`);
});