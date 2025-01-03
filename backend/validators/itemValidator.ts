// validators/itemValidator.ts
import Joi from 'joi';

export const createItemValidator = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(500).optional(),
  price: Joi.number().positive().required(),
});

export const updateItemValidator = Joi.object({
  name: Joi.string().max(100).optional(),
  description: Joi.string().max(500).optional(),
  price: Joi.number().positive().optional(),
});