const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const Joi = require("joi");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Event = require("./models/Event");
const eventValidation = require("./validation/eventValidation");

const MONGODB_URI =
  "mongodb+srv://Brainhub:BrainhubFullstackProject2021@test.b3oyu.mongodb.net/brainhub?retryWrites=true&w=majority";

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.post("/api/createEvent", async (req, res) => {
  try {
    const result = await eventValidation.validateAsync(req.body);
    console.log("All parameters within the requirements", result);

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
});

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
