const express= require('express');
const router= express.Router();
const imagen=require('../controllers/imagen.controller');

router.get('/',imagen.getImagenes);
router.get('/:id',imagen.getImagen);
router.post('/',imagen.crearImagen);
router.put('/:id',imagen.editarImagen);
router.delete('/:id',imagen.eliminarImagen);


module.exports= router;