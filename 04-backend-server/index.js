const express = require('express');

// Crear el servidor de express
const app =express();

app.listen(3000, () => {
  console.log('Servidor coriendo en el puerto 3000');
})
