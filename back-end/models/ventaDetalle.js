const moongose= require('moongose');
const {Schema}= moongose;

const ventaDetalleSchema= new Schema({
    cantidad:{type:Number,require:true},
    precio:{type:Number,require:true},
    venta:{type:Schema.Types.ObjectId,ref:'venta'},
    producto:{type:Schema.Types.ObjectId,ref:'producto'}
});

module.exports=mongoose.model('venta_detalle',ventaDetalleSchema);