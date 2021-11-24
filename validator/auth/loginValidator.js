const { body } = require("express-validator");
const User = require("../../models/User");

module.exports = [
  body("email").isEmail().withMessage("email cannot be empty").normalizeEmail(),

  body("password").isLength({ min: 5 }).withMessage("password cannot be empty"),
];
