import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPass = await bcrypt.hash(password, 10);
  const data = new Date();
  const newUser = {
    email,
    name,
    password: hashedPass,
    isAdm,
    id: uuidv4(),
    createdOn: data,
    updatedOn: data,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
