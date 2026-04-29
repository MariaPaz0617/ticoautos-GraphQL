const jwt = require("jsonwebtoken");  //Verifica el Token

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