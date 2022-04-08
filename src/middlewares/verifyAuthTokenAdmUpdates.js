import jwt from "jsonwebtoken";
import users from "../database";

const verifyAuthTokenAdmUpdates = (req, res, next) => {
  let token = req.headers.authorization;
  const email = req.paramers;
  const userAdm = users.find((user) => user.email === email);

  if (!token) {
    return res.status(401).json({ message: "Token não autorizado" });
  } else if (users.isAdm === false) {
    return res.status(401).json({
      message: "Voce nao possui permissao para fazer essa alteração.",
    });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token invalido" });
    }
    next();
  });
};
export default verifyAuthTokenAdmUpdates;
