const { response } = require('express');

// const Usuario = require('../models/usuario');
// const Medico = require('../models/medico');
// const Hospital = require('../models/hospital');

const fileUpLoad = async (req, res = response) => {
	// const busqueda = req.params.busqueda;
	// const regexp = new RegExp(busqueda, 'i');

	// const [usuarios, medicos, hospitales] = await Promise.all([
	// 	Usuario.find({ nombre: regexp }),
	// 	Medico.find({ nombre: regexp }),
	// 	Hospital.find({ nombre: regexp }),
	// ]);

	const tipo = req.params.tipo;
	const id = req.params.id;
	const tiposValidos = ['usuarios', 'hospitales', 'medicos'];

	if (!tiposValidos.includes(tipo)) {
		return res.status(400).json({
			ok: false,
			msg: 'El tipo tiene que ser: usuarios - medicos - hospitales',
		});
	}

	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({
      ok: false,
      msg: 'No hay ningun archivo'
    });
	}

  // Procesar la imagen ...

	res.json({
		ok: true,
		msg: 'fileUpLoad',
	});
};

module.exports = {
	fileUpLoad,
};
