const express= require('express');
const {mongoose} =require('./database');

const app= express();

//setting
app.set('port',process.env.PORT || 3000);


//middlewares
app.use(express.json());

//Routes
app.use('/api/categorias',require('./routers/categoria.routes'));
app.use('/api/generos',require('./routers/genero.routes'));
app.use('/api/tipoUsuarios',require('./routers/tipoUsuario.routes'));
app.use('/api/usuarios',require('./routers/usuario.routes'));
app.use('/api/productos',require('./routers/producto.routes'));

app.listen(app.get('port'));

