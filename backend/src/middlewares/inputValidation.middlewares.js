import { success, z } from 'zod';

export const Validator = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
            });
        }
        req.body = result.data;
        next();
    };
}