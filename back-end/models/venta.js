const mongoose = require('mongoose');
const {Schema} = mongoose;

const ventaSchema =new Schema({
    
    num_pedido :{type:String,required:true},
    fecha: {type:Date,required:true},
    direccion :{type:String,required:true},
    telefono: {type:Number,required:true},
    medio_pago:{type:String,required:true},
    estado: {type:String,required:true},
    total: {type:Number,required:true},
    usuario:{type:Schema.Types.ObjectId,ref:'usuario'}
});

module.exports=mongoose.model('venta',ventaSchema);