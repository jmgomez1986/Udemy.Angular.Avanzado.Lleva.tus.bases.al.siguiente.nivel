const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {

  const {email, password} = req.body;

	try {

    const userDB = await Usuario.findOne({email});

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

module.exports = {
	login,
};
