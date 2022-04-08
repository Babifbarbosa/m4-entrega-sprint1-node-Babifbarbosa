import users from "../database";

const deleteUserService = (id, res) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return res.status(401).json({ message: "Usuario não encontrado" });
  }

  users.splice(userIndex, 1);

  return res.status(200).json({ message: "Usuario excluido" });
};

export default deleteUserService;
