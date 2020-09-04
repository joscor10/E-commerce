const express= require('express');
const router= express.Router();
const genero=require('../controllers/genero.controller');

router.get('/',genero.getGeneros);
router.get('/:id',genero.getGenero);
router.post('/',genero.crearGenero);
router.put('/:id',genero.editarGenero);
router.delete('/:id',genero.eliminarGenero);


module.exports= router;