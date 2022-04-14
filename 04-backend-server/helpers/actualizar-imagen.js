const fs = require('fs');
const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const actualizarImagen = async (tipo, id, nombreArchivo) => {
	// const [usuarios, medicos, hospitales] = await Promise.all([
	// 	Usuario.find({ nombre: regexp }),
	// 	Medico.find({ nombre: regexp }),
	// 	Hospital.find({ nombre: regexp }),
	// ]);

	switch (tipo) {
		case 'medicos':
			const medico = await Medico.findById(id);
			if (!medico) {
				return false;
			}

			const pathViejo = `./uploads/medicos/${medico.img}`;
			if (fs.existsSync(pathViejo)) {
				// Borrar la imagen anterior
				fs.unlinkSync(pathViejo);
			}
			medico.img = nombreArchivo;
			await medico.save();
      return true;

		case 'hospitales':
		case 'usuarios':

		default:
			return res.status(500).json({
				ok: false,
				msg: 'La tabla tiene que ser usuarios - medicos - hospitales',
			});
	}
};

module.exports = {
	actualizarImagen,
};
