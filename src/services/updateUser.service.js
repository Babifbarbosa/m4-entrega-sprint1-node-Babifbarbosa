import users from "../database";

const updateUserService = (id, name, email) => {
  const updatedUser = {
    id,
    name,
    email,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "Usuario não encontrado";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};

export default updateUserService;
