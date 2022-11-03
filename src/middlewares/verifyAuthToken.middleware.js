import jwt from "jsonwebtoken";

const verifyAuth = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não autorizado" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token invalido" });
    }
    next();
  });
};
export default verifyAuth;
