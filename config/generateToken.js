const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "100y",
  });
};

module.exports = generateToken;
