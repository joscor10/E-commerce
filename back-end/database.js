const mongoose=require('mongoose');

const URI='mongodb://localhost/joscor';

mongoose.connect(URI,{ useNewUrlParser: true,useUnifiedTopology: true } )
    .then(db=> console.log('conectado'))
    .catch(err=>console.log(err));

module.exports= mongoose;