const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		const userDB = await Usuario.findOne({ email });

		// Verificar email
		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: 'Email invalido',
			});
		}

		// Verificar contraseña
		const validPassword = bcrypt.compareSync(password, userDB.password);

		if (!validPassword) {
			return res.status(404).json({
				ok: false,
				msg: 'Contraseña invalida',
			});
		}

		// Generar el Token (JWT)
		const token = await generarJWT(userDB.id);

		res.json({
			ok: true,
			msg: 'Logueado exitosamente',
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado....',
		});
	}
};

const googleSignIn = async (req, res = reponse) => {
	const googleToken = req.body.token;

	try {
		const { name, email, picture } = await googleVerify(googleToken);

		res.json({
			ok: true,
			msg: 'Google Sign-in',
			name,
			email,
			picture,
		});
	} catch (error) {
		res.status(401).json({
			ok: false,
			msg: 'El token no es correcto',
		});
	}
};

module.exports = {
	login,
	googleSignIn,
};
