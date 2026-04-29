// ! = el dato no puede venir null
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
    getAllVehicles: [Vehicle]
  }
`;

module.exports = typeDefs;