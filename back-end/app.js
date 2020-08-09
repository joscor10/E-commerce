const express= require('express');
const {mongoose} =require('./database');

const app= express();

//setting
app.set('port',process.env.PORT || 3000);


//middlewares
app.use(express.json());

//Routes
app.use('/api/categorias',require('./routers/categoria.routes'))


app.listen(app.get('port'));

