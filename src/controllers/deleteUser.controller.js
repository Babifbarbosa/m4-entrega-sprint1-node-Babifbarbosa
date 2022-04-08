import deleteUserService from "../services/deleteuser.service";
import jwt from "jsonwebtoken";

const deleteUserController = (req, res) => {
  let token = req.headers.authorization;

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    const { id } = decode;
    const deleteUser = deleteUserService(id, res);

    return res.json(deleteUser);
  });
};

export default deleteUserController;
