require("dotenv").config();

const { app, startApolloServer } = require("./app");

// OJO: el archivo está dentro de src/config y se llama BD.js
const connectDB = require("./src/config/BD");

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await connectDB();
  await startApolloServer();

  app.listen(PORT, () => {
    console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
  });
};

startServer();