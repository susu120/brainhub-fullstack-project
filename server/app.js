const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const morgan = require("morgan");
const post = require("./routes/post")

// Middleware

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// Posts

app.post("/api/createEvent", post.createEvent);

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
module.exports = app;
