import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import createUserController from "../controllers/createUser.controller";
import updateUserController from "../controllers/updateUsers.controller";
import listUserController from "../controllers/listUsers.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middlewares";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAuthTokenAdmUpdates from "../middlewares/verifyAuthTokenAdmUpdates";
import listProfileController from "../controllers/listProfile.controller";
import verifyTokenAdmGet from "../middlewares/verifyTokenAdm.middlewares";

const router = Router();

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.get("/users", verifyTokenAdmGet, listUserController);
router.patch("/users/:id", verifyAuthTokenAdmUpdates, updateUserController);
router.delete("/users/:id", verifyAuthTokenAdmUpdates, deleteUserController);
router.post("/login", userLoginController);
router.get("/users/profile", verifyAuthTokenMiddleware, listProfileController);
export default router;
