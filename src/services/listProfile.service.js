import users from "../database";

const listProfilesService = (id) => {
  const profileAuth = users.find((user) => user.id === id);

  return profileAuth;
};
export default listProfilesService;
