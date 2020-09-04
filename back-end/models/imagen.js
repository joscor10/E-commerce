const moongose= require('moongose');
const {Schema}= moongose;

const imagenSchema= new Schema({
    ruta:{type:String},
    producto:{type:Schema.Types.ObjectId,ref:'producto'}
});

module.exports=mongoose.model('imagen',imagenSchema);