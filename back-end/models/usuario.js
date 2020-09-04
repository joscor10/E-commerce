const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuarioSchema =new Schema({
    
    usuario :{type:String,required:true},
    nombre: {type:String,required:true},
    apellido :{type:String,required:true},
    direccion: {type:String,required:true},
    telefono: {type:Number,required:true},
    email:{type:String,required:true},
    clave: {type:String,required:true},
    tipoUsuario:{type:Schema.Types.ObjectId,ref:'tipoUsuario'}
});

module.exports=mongoose.model('usuario',usuarioSchema);