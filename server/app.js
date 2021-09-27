const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const Joi = require("joi");
const mongoose = require("mongoose");
const morgan = require("morgan");

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

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
