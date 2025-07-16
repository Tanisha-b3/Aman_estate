import { Router } from "express";
import locationRouter from "./v1/location.routes.js";
import propertyRouter from "./v1/property.routes.js";

const router = Router();

router.use("/locations", locationRouter);
router.use("/properties", propertyRouter);

export default router;