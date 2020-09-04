const Genero = require('../models/genero');
const generoCtrl ={};

generoCtrl.getGeneros= async (req,res)=>{
    const generos = await Genero.find();
    res.json(generos);
}

generoCtrl.getGenero=  async(req,res)=>{
    const genero = await Genero.findById(req.params.id);
    res.json(genero);
}


generoCtrl.crearGenero= async(req,res)=>{
    const genero= new Genero({
        nombre:req.body.nombre
    });
    await genero.save();
    res.json({
        status:'Genero Guardado'
    });
}

generoCtrl.editarGenero= async(req,res)=>{
    const genero ={
        nombre: req.body.nombre
    }
    await Genero.findByIdAndUpdate(req.params.id,{$set:genero},{new:true});
    res.json({
        status:'Genero Actualizado'
    });
}
generoCtrl.eliminarGenero= async (req,res)=>{
    await Genero.findByIdAndRemove(req.params.id);
    res.json({
        status:'Genero Eliminado'
    });
}


module.exports=generoCtrl;