const express = require('express');
const path = require('path');

const mainController = require('./routes/mainRoutes');

const app = express();

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.use('/', mainController);


const port = process.env.PORT || 3500;
app.listen(port,()=>{
    console.log(`server starter on: http://localhost:${port}`);
})