import listUsersService from "../services/listUser.service";

const listUserController = (req, res) => {
  const users = listUsersService();

  return res.json(users);
};

export default listUserController;
