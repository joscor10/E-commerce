const express= require('express');
const router= express.Router();
const categoria=require('../controllers/categoria.controller');

router.get('/',categoria.getCategorias);
router.get('/:id',categoria.getCategoria);
router.post('/',categoria.crearCategoria);
router.put('/:id',categoria.editarCategoria);
router.delete('/:id',categoria.eliminarCategoria);


module.exports= router;