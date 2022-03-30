const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    await mongoose.connect('mongodb+srv://matias:matias01@cluster0.gqysi.mongodb.net/test');

    console.log('DB online');

  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la BD')
  }
}

module.exports = {
  dbConnection
}
