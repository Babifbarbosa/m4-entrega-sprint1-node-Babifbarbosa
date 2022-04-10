import jwt from "jsonwebtoken";
import users from "../database";

const admMiddlewares = (req, res, next) => {
  let token = req.headers.authorization;

  const decodeMail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });
  const userAdm = users.find((user) => user.email === decodeMail);

  const adm = userAdm.isAdm;

  if (adm) {
    return next();
  }

  if (req.params.id === userAdm.id) {
    return next();
  }

  return res.status(401).json({ message: "Token não autorizado" });
};

export default admMiddlewares;
