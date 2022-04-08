import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = updateUserService(id, name, email);

  return res.json(updatedUser);
};

export default updateUserController;
