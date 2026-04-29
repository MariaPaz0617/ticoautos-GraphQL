
const Vehicle = require("../models/vehicle.model");

const resolvers = {
  Query: {
//Recibe el ID y lo buca en mongo para devolver el Vehiculo
    getVehicle: async (_, { id }) => {     //No usa el primer parametro y saca el id que viene del query
      return await Vehicle.findById(id);
    },

    getAllVehicles: async () => {
      return await Vehicle.find().sort({ createdAt: -1 }); //Ordena de decendente (-1) a ascendete 
    },
  },

  Vehicle: {
    id: (parent) => parent._id.toString(), //parent = obj que viene de mongo
  },
};

module.exports = resolvers;



