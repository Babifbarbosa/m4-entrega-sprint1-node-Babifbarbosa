import jwt from "jsonwebtoken";
import users from "../database";

const verifyTokenAdmGet = (req, res, next) => {
  let token = req.headers.authorization;
  const email = req.paramers;
  const userAdm = users.find((user) => user.email === email);

  if (users.isAdm === false) {
    return res.status(401).json({
      message: "Voce nao possui permissao para fazer essa alteração.",
    });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token invalido" });
    } else if (!token) {
      return res.status(401).json({ message: "Token não autorizado" });
    }
    next();
  });
};

export default verifyTokenAdmGet;
