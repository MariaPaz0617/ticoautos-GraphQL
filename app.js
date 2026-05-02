const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");

// Conectar GraphQL con Express
const { expressMiddleware } = require("@apollo/server/express4");

// OJO: estos archivos están dentro de src/graphql
const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");
const context = require("./src/graphql/context");

const app = express();

// Permite peticiones del frontend y recibir JSON
app.use(cors());
app.use(express.json());

// Configura GraphQL
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Inicia Apollo
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context,
    })
  );
};

module.exports = {
  app,
  startApolloServer,
};