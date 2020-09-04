const express= require('express');
const router= express.Router();
const usuario=require('../controllers/usuario.controller');

router.get('/',usuario.getUsuarios);
router.get('/:id',usuario.getUsuario);
router.post('/',usuario.crearUsuario);
router.put('/:id',usuario.editarUsuario);
router.delete('/:id',usuario.eliminarUsuario);


module.exports= router;