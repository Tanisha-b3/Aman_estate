import express from "express";
import { registerUser, loginUserFlexible } from "../../controllers/user.controllers.js";
import { Validator } from "../../middlewares/inputValidation.middlewares.js";
import { userRegistrationSchema, userLoginFlexibleSchema } from "../../validations/user.schema.js";

const router = express.Router();


router.post("/register", Validator(userRegistrationSchema), registerUser);

router.post("/login", Validator(userLoginFlexibleSchema), loginUserFlexible);

export default router;
