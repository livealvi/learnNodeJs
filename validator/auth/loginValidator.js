const { body } = require("express-validator");
const User = require("../../models/User");

module.exports = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 5 })
    .withMessage("your password must be at least 5 characters"),
];
