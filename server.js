require("dotenv").config();

const { app, startApolloServer } = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await connectDB();
  await startApolloServer();

  app.listen(PORT, () => {
    console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
  });
};

startServer();