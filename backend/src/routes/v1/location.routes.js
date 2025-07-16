import { Router } from "express";
import { Validator } from "../../middlewares/inputValidation.middlewares.js";
import { locationSchema } from "../../validations/location.schema.js";
import { createLocation, getLocations } from "../../controllers/location.controllers.js";

const router = Router();

router.post(
    "/create",
    Validator(locationSchema),
    createLocation
)

router.get("/", getLocations);

export default router;