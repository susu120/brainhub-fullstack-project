const Joi = require("joi");

const eventSchema = Joi.object({
  firstName: Joi.string().required(),

  lastName: Joi.string().required(),

  email: Joi.string().email().required(),

  eventDate: Joi.string().required(),
});

module.exports = eventSchema;
