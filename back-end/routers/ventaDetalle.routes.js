const express= require('express');
const router= express.Router();
const ventaDetalle=require('../controllers/ventaDetalle.controller');

router.get('/',ventaDetalle.getVentasDetalle);
router.get('/:id',ventaDetalle.getVentaDetalle);
router.post('/',ventaDetalle.crearVentaDetalle);
router.put('/:id',ventaDetalle.editarVentaDetalle);
router.delete('/:id',ventaDetalle.eliminarVentaDetalle);


module.exports= router;