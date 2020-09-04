const express= require('express');
const router= express.Router();
const venta=require('../controllers/venta.controller');

router.get('/',venta.getVentas);
router.get('/:id',venta.getVenta);
router.post('/',venta.crearVenta);
router.put('/:id',venta.editarVenta);
router.delete('/:id',venta.eliminarVenta);


module.exports= router;