import { Router } from "express";
import locationRouter from "./v1/location.routes.js";
import propertyRouter from "./v1/property.routes.js";
import userRouter from "./v1/user.routes.js";

const router = Router();

router.use("/locations", locationRouter);
router.use("/properties", propertyRouter);
router.use("/users", userRouter);

export default router;