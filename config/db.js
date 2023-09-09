const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const connecttion = mongoose.connect(
  process.env.mongourl || "mongodb://localhost:27017/ticket-booking"
);
module.exports = connecttion;
