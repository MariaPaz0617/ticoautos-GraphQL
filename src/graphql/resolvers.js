const Vehicle = require("../models/vehicle.model");

/**
 * Objeto que contiene las funciones (resolvers) para responder a las consultas (Queries) y mutaciones de GraphQL.
 * Conecta las definiciones de `typeDefs` con la base de datos de MongoDB.
 */
const resolvers = {
  Query: {
    // Consulta pública: permite ver un vehículo por id
    getVehicle: async (_, { id }) => {
      return await Vehicle.findById(id);
    },

    // Consulta pública: la usa PublicHome
    getAllVehicles: async () => {
      return await Vehicle.find().sort({ createdAt: -1 });
    },

    // Consulta protegida: la usa Home
    getAllVehiclesAuth: async (_, __, context) => {
      if (!context.user) {
        throw new Error("No autorizado. Debe iniciar sesión.");
      }

      return await Vehicle.find().sort({ createdAt: -1 });
    },
  },

  Vehicle: {
    id: (parent) => parent._id.toString(),
  },
};

module.exports = resolvers;