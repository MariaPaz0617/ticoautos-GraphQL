const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("Falta la variable DATABASE_URL en el archivo .env");
    }

    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Conexión a MongoDB establecida");
  } catch (error) {
    console.error("Error al conectar a MongoDB:");
    console.error(error.message);
    throw error;
  }
};

module.exports = connectDB;