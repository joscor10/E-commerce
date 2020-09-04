const Venta = require('../models/venta');
const ventaCtrl ={};

ventaCtrl.getVentas= async (req,res)=>{
    const ventas = await Venta.find()
        .populate('usuario');
    res.json(ventas);
}

ventaCtrl.getVenta=  async(req,res)=>{
    const venta = await Venta.findById(req.params.id)
        .populate('usuario');
    res.json(venta);
}


ventaCtrl.crearVenta= async(req,res)=>{
    const venta= new Venta({
        num_pedido :req.body.num_pedido,
        fecha: req.body.fecha,
        direccion : req.body.direccion,
        telefono: req.body.telefono,
        medio_pago: req.body.medio_pago,
        estado: req.body.estado,
        total: req.body.total,
        usuario: req.body.usuario
    });
    await venta.save();
    res.json({
        status:'Venta Guardada'
    });
}

ventaCtrl.editarVenta= async(req,res)=>{
    const venta ={
        num_pedido :req.body.num_pedido,
        fecha: req.body.fecha,
        direccion : req.body.direccion,
        telefono: req.body.telefono,
        medio_pago: req.body.medio_pago,
        estado: req.body.estado,
        total: req.body.total,
        usuario: req.body.usuario
    }
    await Venta.findByIdAndUpdate(req.params.id,{$set:venta},{new:true});
    res.json({
        status:'Venta Actualizada'
    });
    
}
ventaCtrl.eliminarVenta= async (req,res)=>{
    await Venta.findByIdAndRemove(req.params.id);
    res.json({
        status:'Venta Eliminada'
    });
}


module.exports=ventaCtrl;