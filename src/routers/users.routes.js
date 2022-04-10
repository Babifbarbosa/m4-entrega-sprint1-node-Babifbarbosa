import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import createUserController from "../controllers/createUser.controller";
import updateUserController from "../controllers/updateUsers.controller";
import listUserController from "../controllers/listUsers.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import listProfileController from "../controllers/listProfile.controller";
import admMiddlewares from "../middlewares/adm.middlewares";
import verifyEmail from "../middlewares/verifyEmail.middlewares";
import verifyAuth from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("/users", verifyEmail, createUserController);
router.get("/users", admMiddlewares, verifyAuth, listUserController);
router.patch("/users/:id", admMiddlewares, verifyAuth, updateUserController);
router.delete("/users/:id", admMiddlewares, verifyAuth, deleteUserController);
router.post("/login", userLoginController);
router.get("/users/profile", verifyAuth, listProfileController);
export default router;
