const VentaDetalle = require('../models/ventaDetalle');
const ventaDetalleCtrl ={};

ventaDetalleCtrl.getVentasDetalle= async (req,res)=>{
    const ventasDetalle = await VentaDetalle.find()
        .populate('venta')
        .populate('producto');
    res.json(ventasDetalle);
}

ventaDetalleCtrl.getVentaDetalle=  async(req,res)=>{
    const ventaDetalle = await VentaDetalle.findById(req.params.id)
        .populate('venta')
        .populate('producto');
    res.json(ventaDetalle);
}


ventaDetalleCtrl.crearVentaDetalle= async(req,res)=>{
    const ventaDetalle= new VentaDetalle({
        cantidad :req.body.cantidad,
        precio: req.body.precio,
        venta : req.body.venta,
        producto: req.body.producto        
    });
    await ventaDetalle.save();    
}

ventaDetalleCtrl.editarVentaDetalle= async(req,res)=>{
    const ventaDetalle ={
        cantidad :req.body.cantidad,
        precio: req.body.precio,
        venta : req.body.venta,
        producto: req.body.producto  
    }
    await VentaDetalle.findByIdAndUpdate(req.params.id,{$set:ventaDetalle},{new:true});
    
    
}
ventaDetalleCtrl.eliminarVentaDetalle= async (req,res)=>{
    await VentaDetalle.findByIdAndRemove(req.params.id);    
}


module.exports=ventaDetalleCtrl;