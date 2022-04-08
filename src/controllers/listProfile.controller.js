import listProfilesService from "../services/listProfile.service";
import jwt from "jsonwebtoken";
import users from "../database";
const listProfileController = (req, res) => {
  let token = req.headers.authorization;

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    const { id } = decode;
    const listProfile = listProfileService(id);
    return res.json(listProfile);
  });
};

export default listProfileController;
