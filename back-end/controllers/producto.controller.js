const Producto = require('../models/producto');
const productoCtrl ={};

productoCtrl.getProductos= async (req,res)=>{
    const productos = await Producto.find()
        .populate('categoria')
        .populate('genero')
        .populate('usuario');
        
    res.json(productos);
}

productoCtrl.getProducto=  async(req,res)=>{
    const producto = await Producto.findById(req.params.id)
        .populate('categoria')
        .populate('genero')
        .populate('usuario');
    res.json(producto);
}


productoCtrl.crearProducto= async(req,res)=>{
    const producto= new Producto({
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        marca : req.body.marca,
        modelo : req.body.modelo,
        existencia : req.body.existencia,
        precio : req.body.precio,
        imagen1 : req.body.imagen1,
        imagen2 : req.body.imagen2,
        imagen3 : req.body.imagen3,
        imagen4 : req.body.imagen4,
        imagen5 : req.body.imagen5,
        categoria : req.body.categoria,
        genero : req.body.genero,
        usuario : req.body.usuario 
    });
    await producto.save();
    res.json({
        status:'Producto Guardado'
    });
}

productoCtrl.editarProducto= async(req,res)=>{
    const producto ={
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        marca : req.body.marca,
        modelo : req.body.modelo,
        existencia : req.body.existencia,
        precio : req.body.precio,
        imagen1 : req.body.imagen1,
        imagen2 : req.body.imagen2,
        imagen3 : req.body.imagen3,
        imagen4 : req.body.imagen4,
        imagen5 : req.body.imagen5,
        categoria : req.body.categoria,
        genero : req.body.genero,
        usuario : req.body.usuario 
    }
    await Producto.findByIdAndUpdate(req.params.id,{$set:producto},{new:true});
    res.json({
        status:'Producto Actualizado'
    });
    
}
productoCtrl.eliminarProducto= async (req,res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({
        status:'Producto Eliminado'
    });
}


module.exports=productoCtrl;