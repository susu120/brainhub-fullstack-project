const mongoose = require("mongoose");

// MONGODB_URI should be normally saved in a local variable for showcase purposes it is hardcoded
const MONGODB_URI =
  "mongodb+srv://Brainhub:BrainhubFullstackProject2021@test.b3oyu.mongodb.net/brainhub?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
