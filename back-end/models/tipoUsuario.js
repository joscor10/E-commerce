const mongoose = require('mongoose');
const {Schema} = mongoose;

const tipoUsuarioSchema =new Schema({
    
    nombre :{type:String,required:true}
});

module.exports=mongoose.model('tipoUsuario',tipoUsuarioSchema);