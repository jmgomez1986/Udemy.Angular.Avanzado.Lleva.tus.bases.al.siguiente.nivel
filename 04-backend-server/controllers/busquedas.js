const { response } = require('express');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const getTodo = async (req, res = response) => {
	const busqueda = req.params.busqueda;
	const regexp = new RegExp(busqueda, 'i');

	// const usuarios = await Usuario.find({ nombre: regexp });
	// const medicos = await Medico.find({ nombre: regexp });
	// const hospitales = await Hospital.find({ nombre: regexp });

	const [usuarios, medicos, hospitales] = await Promise.all([
		Usuario.find({ nombre: regexp }),
		Medico.find({ nombre: regexp }),
		Hospital.find({ nombre: regexp }),
	]);

	res.json({
		ok: true,
		usuarios,
		medicos,
		hospitales,
	});
};

module.exports = {
	getTodo,
};
