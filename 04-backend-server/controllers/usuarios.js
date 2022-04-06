const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res) => {
	const usuarios = await Usuario.find({}, 'nombre email role google');

	res.json({
		ok: true,
		usuarios,
    uid: req.uid
	});
};

const crearUsuario = async (req, res = response) => {
	const { nombre, password, email } = req.body;

	try {
		const existeEmail = await Usuario.findOne({ email });

		if (existeEmail) {
			return res.status(400).json({
				ok: false,
				msg: 'El correo ya está registrado',
			});
		}

		const usuario = new Usuario(req.body);
    
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    
    usuario.password = bcrypt.hashSync( password, salt);
    
    // Guardar usuario
		await usuario.save();

    const token = await generarJWT(usuario.id);

		res.json({
			ok: true,
			usuario,
      token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado....',
		});
	}
};

const actualizarUsuario = async (req, res = response) => {

  const uid = req.params.id;

  try {
    // TODO: validar token y comprobar si es el usuario correcto

    const existeUserDB = await Usuario.findById(uid);

		if (!existeUserDB) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe un usuario con el id ingresado',
			});
		}

    // Actualizaciones
    const {password, google, email, ...campos} = req.body;

    if (existeUserDB.email !== email) {

      const existeEmail = await Usuario.findOne({ email });

      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          msg: 'Ya existe un usuario con ese email',
        });
      }
    }

    campos.email = email;

    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, {new: true});

    res.json({
			ok: true,
			usuarioActualizado,
		});
  } catch (error) {
    console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado....',
		});
  }
};

const borrarUsuario = async (req, res = response) => {

  const uid = req.params.id;

  try {
    const existeUserDB = await Usuario.findById(uid);

		if (!existeUserDB) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe un usuario con el id ingresado',
			});
		}

    await Usuario.findByIdAndDelete(uid);

    res.json({
			ok: true,
			msg: 'Usuario eliminado',
		});
  } catch (error) {
    console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado....',
		});    
  }
};

module.exports = {
	getUsuarios,
	crearUsuario,
  actualizarUsuario,
  borrarUsuario
};
