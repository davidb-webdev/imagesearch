const Joi = require("joi");

const addFavoriteSchema = Joi.object({
  title: Joi.string().required(),
  byteSize: Joi.number().required(),
  url: Joi.string().required()
});

const removeFavoriteSchema = Joi.object({
  url: Joi.string().required()
});

module.exports = { addFavoriteSchema, removeFavoriteSchema };
