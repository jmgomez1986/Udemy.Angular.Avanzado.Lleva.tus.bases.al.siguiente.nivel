const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

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
			msg: 'No hay ningun archivo',
		});
	}

	// Procesar la imagen ...
	const file = req.files.imagen;
	const nombreCortado = file.name.split('.');
	const extensionArchivo = nombreCortado[nombreCortado.length - 1];

	// Validar extension
	const extensionesValidas = ['png', 'jpg', 'gif'];

	if (!extensionesValidas.includes(extensionArchivo)) {
		return res.status(400).json({
			ok: false,
			msg: 'La extension del archivo no está permitida (*.png, *.jpg, *.gif)',
		});
	}

	// Generar el nombre del archivo
	const nombreArhivo = `${uuidv4()}.${extensionArchivo}`;

	// Path para guardar la imagen
	const path = `./uploads/${tipo}/${nombreArhivo}`;

	// Mover la imagen
	file.mv(path, function (err) {
		if (err) {
			console.log(err);
			return res.status(400).json({
				ok: false,
				msg: 'La extension del archivo no está permitida (*.png, *.jpg, *.gif)',
			});
		}

		res.json({
			ok: true,
			msg: 'Archivo subido',
      nombreArhivo
		});
	});

};

module.exports = {
	fileUpLoad,
};
