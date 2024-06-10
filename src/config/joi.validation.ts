import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
    MONGODB: Joi.string().required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(20),
});