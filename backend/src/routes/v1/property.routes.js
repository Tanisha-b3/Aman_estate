import {Router} from 'express';
import { Validator } from '../../middlewares/inputValidation.middlewares.js';
import { propertySchema } from '../../validations/property.schema.js';
import { createProperty, getProperties } from '../../controllers/property.controllers.js';


const router = Router();

router.post('/create', Validator(propertySchema), createProperty);

router.get('/', getProperties);

export default router;