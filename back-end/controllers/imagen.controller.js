const Imagen= require('../models/imagen');
const imagenCtrl= {};


imagenCtrl.getImagenes= async (req,res)=>{
    const imagenes = await Imagen.find()
        .populate('producto');       
    res.json(imagenes);
}

imagenCtrl.getImagen=  async(req,res)=>{
    const imagen = await Imagen.findById(req.params.id)
        .populate('producto');        
    res.json(imagen);
}


imagenCtrl.crearImagen= async(req,res)=>{
    const imagen= new Imagen({
        ruta : req.body.ruta,
        producto : req.body.producto        
    });
    await imagen.save();
    
}

imagenCtrl.editarImagen= async(req,res)=>{
    const imagen ={
        ruta : req.body.ruta,
        producto : req.body.producto      
    };
    await Producto.findByIdAndUpdate(req.params.id,{$set:imagen},{new:true});   
    
}
imagenCtrl.eliminarImagen= async (req,res)=>{
    await Imagen.findByIdAndRemove(req.params.id);    
}


module.exports=imagenCtrl;