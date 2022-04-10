import users from "../database";

const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExist = users.find((user) => user.email === email);

  if (userAlreadyExist) {
    return res.status(400).json({ message: "Email ja esta sendo utilizado" });
  }
  next();
};
export default verifyEmail;
