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

const getDocumentosColeccion = async (req, res = response) => {
	const tabla = req.params.tabla;
	const busqueda = req.params.busqueda;
	const regexp = new RegExp(busqueda, 'i');

	// Opcion con tabla y modelos del curso
	let data = [];

	switch (tabla) {
		case 'medicos':
			data = await Medico.find({ nombre: regexp })
				.populate('usuario', 'nombre img')
				.populate('hospital', 'nombre img');
			break;

		case 'hospitales':
			data = await Hospital.find({ nombre: regexp }).populate(
				'usuario',
				'nombre email img'
			);
			break;

		case 'usuarios':
			data = await Usuario.find({ nombre: regexp });
			break;

		default:
			return res.status(500).json({
				ok: false,
				msg: 'La tabla tiene que ser usuarios - medicos - hospitales',
			});
	}

	res.json({
		ok: true,
		resultados: data,
	});

	// Opcion con tabla y modelos dinamico
	// const tablesModels = [
	// 	{
	// 		table: 'usuarios',
	// 		model: Usuario,
	// 		populate: null,
	// 	},
	// 	{
	// 		table: 'medicos',
	// 		model: Medico,
	// 		populate: [
	// 			{
	// 				model: 'usuario',
	// 				fields: 'nombre email img',
	// 			},
	// 			{
	// 				model: 'hospital',
	// 				fields: 'nombre img',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		table: 'hospitales',
	// 		model: Hospital,
	// 		populate: [
	// 			{
	// 				model: 'usuario',
	// 				fields: 'nombre email img',
	// 			}
	// 		],
	// 	},
	// ];

	// const tableModel = tablesModels.find((tm) => tm.table === tabla);
	// console.log(tableModel);
	// if (tableModel) {
	// 	const data = await tableModel.model
	// 		.find({ nombre: regexp })
	// 		.populate(tableModel.populate[0].model, tableModel.populate[0].fields)
	// 		.populate(tableModel.populate[1]?.model, tableModel.populate[1]?.fields);

	// 	res.json({
	// 		ok: true,
	// 		resultados: data,
	// 	});
	// } else {
	// 	res.status(500).json({
	// 		ok: false,
	// 		msg: 'La tabla tiene que ser usuarios - medicos - hospitales',
	// 	});
	// }
};

module.exports = {
	getTodo,
	getDocumentosColeccion,
};
