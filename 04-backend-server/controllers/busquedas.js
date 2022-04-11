const { response } = require('express');

const getTodo = async(req, res = response) => {
  const busqueda = req.params.busqueda;
	// const hospitales = await Hospital.find().populate(
	// 	'usuario',
	// 	'nombre email img'
	// );

	res.json({
		ok: true,
		msg: 'getTodo',
    busqueda
	});
}

module.exports = {
  getTodo
}
