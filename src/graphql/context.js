const jwt = require("jsonwebtoken");  //Verifica el Token

/**
 *Genera el contexto global para cada petición GraphQL.
 * Extrae el token JWT de la cabecera `Authorization y lo verifica 
 *Añade el usuario decodificado al contexto para poder usarlo en los resolvers.
*/
const context = async ({ req }) => {
  const authHeader = req.headers.authorization || "";

  if (!authHeader) {
    return { user: null };
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET); //Valida el token y decodifica el usuario
    return { user };
  } catch (error) {
    return { user: null };
  }
};

module.exports = context;