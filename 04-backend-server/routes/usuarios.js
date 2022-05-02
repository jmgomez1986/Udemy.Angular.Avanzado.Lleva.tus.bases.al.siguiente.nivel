/*
  Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {
	validarJWT,
	validarAdminRole,
	validarAdminRole_o_mismoUsuario,
} = require('../middlewares/validar-jwt');

const {
	getUsuarios,
	crearUsuario,
	actualizarUsuario,
	borrarUsuario,
} = require('../controllers/usuarios');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'El password es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
		validarCampos,
	],
	crearUsuario
);

router.put(
	'/:id',
	[
		validarJWT,
		validarAdminRole_o_mismoUsuario,
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
		check('role', 'El rol es obligatorio').not().isEmpty(),
		validarCampos,
	],
	actualizarUsuario
);

router.delete('/:id', [validarJWT, validarAdminRole], borrarUsuario);

module.exports = router;
