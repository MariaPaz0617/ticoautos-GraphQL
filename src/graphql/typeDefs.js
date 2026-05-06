/**
 * Archivo que define los esquemas y tipos de datos (Type Definitions) para la API GraphQL.
 * Especifica cómo se estructura la información de los vehículos y qué consultas (Queries) se pueden realizar.
 * El '!' el dato no puede venir null.
 */
const typeDefs = `#graphql
  type Vehicle {
    id: ID!       
    title: String!
    brand: String!
    model: String!
    year: Int!
    price: Float!
    description: String
    status: String
    vehicleImage: [String]  
    user: ID!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getVehicle(id: ID!): Vehicle

    # Consulta pública
    getAllVehicles: [Vehicle]

    # Consulta protegida con token
    getAllVehiclesAuth: [Vehicle]
  }
`;

module.exports = typeDefs;