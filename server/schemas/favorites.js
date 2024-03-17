const Joi = require("joi");

const userFavoriteSchema = Joi.object({
  user: Joi.string().required(),
  favoriteImages: Joi.array()
    .items({
      title: Joi.string().required(),
      byteSize: Joi.number().required(),
      url: Joi.string().required()
    })
    .required()
    .min(1)
    .max(1)
});

module.exports = { userFavoriteSchema };
