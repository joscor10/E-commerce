const express= require('express');
const router= express.Router();
const producto=require('../controllers/producto.controller');

router.get('/',producto.getProductos);
router.get('/:id',producto.getProducto);
router.post('/',producto.crearProducto);
router.put('/:id',producto.editarProducto);
router.delete('/:id',producto.eliminarProducto);


module.exports= router;