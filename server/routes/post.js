const eventValidation = require("../validation/eventValidation");
const Event = require("../models/Event");
const Joi = require("joi");

exports.createEvent = async (req, res) => {
  try {
    const result = await eventValidation.validateAsync(req.body);
    const createEvent = new Event({
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      eventDate: result.eventDate,
    });
    await createEvent.save();
    console.log("Event created successfull", createEvent);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    if (err instanceof Joi.ValidationError) {
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
};
