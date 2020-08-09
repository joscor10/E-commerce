const Categoria = require('../models/categorias');
const categoriaCtrl ={};

categoriaCtrl.getCategorias= async (req,res)=>{
    const categorias = await Categoria.find();
    res.json(categorias);
}

categoriaCtrl.getCategoria=  async(req,res)=>{
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
}


categoriaCtrl.crearCategoria= async(req,res)=>{
    const categoria= new Categoria({
        nombre:req.body.nombre
    });
    await categoria.save();
    res.json({
        status:'Categoria Guardada'
    });
}

categoriaCtrl.editarCategoria= async(req,res)=>{
    const categoria ={
        nombre: req.body.nombre
    }
    await Categoria.findByIdAndUpdate(req.params.id,{$set:categoria},{new:true});
    res.json({
        status:'Categoria Actualizada'
    });
}
categoriaCtrl.eliminarCategoria= async (req,res)=>{
    await Categoria.findByIdAndRemove(req.params.id);
    res.json({
        status:'Categoria Eliminado'
    });
}


module.exports=categoriaCtrl;