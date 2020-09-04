const mongoose = require('mongoose');
const {Schema} = mongoose;

const generoSchema =new Schema({
    
    nombre :{type:String,required:true}
});

module.exports=mongoose.model('genero',generoSchema);