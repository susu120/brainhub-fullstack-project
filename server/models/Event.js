const db = require("../db");

const EventSchema = new db.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
});

module.exports = db.models.Event || db.model("Event", EventSchema);
