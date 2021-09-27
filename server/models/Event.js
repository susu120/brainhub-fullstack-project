const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
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

module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
