const router = require("express").Router();
const { body } = require("express-validator");
const User = require("../models/User");

const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController,
} = require("../controllers/authController");

const signupValidator = [
  body("username")
    .isLength({ min: 2, max: 15 })
    .withMessage("username must be between 2 and 15 characters")
    .custom(async (username) => {
      let user = await User.findOne({ username });
      if (user) {
        return Promise.reject("username already used");
      }
    })
    .trim(),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .custom(async (email) => {
      let user = await User.findOne({ email });
      if (user) {
        return Promise.reject("email already used");
      }
    })
    .normalizeEmail(),

  body("password")
    .isLength({ min: 5 })
    .withMessage("your password must be at least 5 characters"),

  body("confirmPassword")
    .isLength({ min: 5 })
    .withMessage("your password must be at least 5 characters")
    .custom((confirmPassword, { req }) => {
      if (confirmPassword != req.body.password) {
        throw new Error("password is not match");
      }
      return true;
    }),
];

router.get("/signup", signupGetController);
router.post("/signup", signupValidator, signupPostController);

router.get("/login", loginGetController);
router.post("/login", loginPostController);

router.get("/logout", logoutController);

module.exports = router;
