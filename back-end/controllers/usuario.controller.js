const Usuario = require('../models/usuario');
const usuarioCtrl ={};

usuarioCtrl.getUsuarios= async (req,res)=>{
    const usuarios = await Usuario.find()
        .populate('tipoUsuario');
    res.json(usuarios);
}

usuarioCtrl.getUsuario=  async(req,res)=>{
    const usuario = await Usuario.findById(req.params.id)
        .populate('tipoUsuario');
    res.json(usuario);
}


usuarioCtrl.crearUsuario= async(req,res)=>{
    const usuario= new Usuario({
        usuario :req.body.usuario,
        nombre: req.body.nombre,
        apellido : req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        clave: req.body.clave,
        tipoUsuario: req.body.tipoUsuario
    });
    await usuario.save();
    res.json({
        status:'Usuario Guardado'
    });
}

usuarioCtrl.editarUsuario= async(req,res)=>{
    const usuario ={
        usuario :req.body.usuario,
        nombre: req.body.nombre,
        apellido : req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        clave: req.body.clave,
        tipoUsuario: req.body.tipoUsuario
    }
    await Usuario.findByIdAndUpdate(req.params.id,{$set:usuario},{new:true});
    res.json({
        status:'Usuario Actualizado'
    });
    
}
usuarioCtrl.eliminarUsuario= async (req,res)=>{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        status:'Usuario Eliminado'
    });
}


module.exports=usuarioCtrl;