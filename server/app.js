const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const post = require("./routes/post");

// Middleware

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// Posts

app.post("/api/createEvent", post.createEvent);

module.exports = app;
