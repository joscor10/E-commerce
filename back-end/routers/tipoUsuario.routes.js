const express= require('express');
const router= express.Router();
const tipoUsuario=require('../controllers/tipoUsuario.controller');

router.get('/',tipoUsuario.getTipoUsuarios);
router.get('/:id',tipoUsuario.getTipousuario);
router.post('/',tipoUsuario.crearTipoUsuario);
router.put('/:id',tipoUsuario.editarTipoUsuario);
router.delete('/:id',tipoUsuario.eliminarTipoUsuario);


module.exports= router;