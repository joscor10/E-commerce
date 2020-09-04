const TipoUsuario = require('../models/tipoUsuario');
const tipoUsuarioCtrl ={};

tipoUsuarioCtrl.getTipoUsuarios= async (req,res)=>{
    const tipoUsuarios = await TipoUsuario.find();
    res.json(tipoUsuarios);
}

tipoUsuarioCtrl.getTipousuario=  async(req,res)=>{
    const tipoUsuario = await TipoUsuario.findById(req.params.id);
    res.json(tipoUsuario);
}


tipoUsuarioCtrl.crearTipoUsuario= async(req,res)=>{
    const tipoUsuario= new TipoUsuario({
        nombre:req.body.nombre
    });
    await tipoUsuario.save();
    res.json({
        status:'Tipo de Usuario Guardado'
    });
}

tipoUsuarioCtrl.editarTipoUsuario= async(req,res)=>{
    const tipoUsuario ={
        nombre: req.body.nombre
    }
    await TipoUsuario.findByIdAndUpdate(req.params.id,{$set:tipoUsuario},{new:true});
    res.json({
        status:'Tipo de Usuario Actualizado'
    });
}
tipoUsuarioCtrl.eliminarTipoUsuario= async (req,res)=>{
    await TipoUsuario.findByIdAndRemove(req.params.id);
    res.json({
        status:'Tipo de Usuario Eliminado'
    });
}


module.exports=tipoUsuarioCtrl;