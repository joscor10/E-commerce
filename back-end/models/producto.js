const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema =new Schema({    
    
    nombre: {type:String,required:true},
    descripcion: {type:String,required:true},
    marca: {type:String},
    modelo: {type:String},
    existencia: {type:Number},
    precio:{type:Number},    
    categoria:{type:Schema.Types.ObjectId,ref:'categoria'},
    genero:{type:Schema.Types.ObjectId,ref:'genero'},
    usuario:{type:Schema.Types.ObjectId,ref:'usuario'}
});

module.exports=mongoose.model('producto',productoSchema);