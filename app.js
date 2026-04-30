const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");

//Conectar GraphQL con Express
const { expressMiddleware } = require("@apollo/server/express4");  

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const context = require("./graphql/context");

const app = express();

//Llamar al frontend y recibir JSON
app.use(cors());
app.use(express.json());


//Configura GraphQL
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

//Inicia Apollo
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

