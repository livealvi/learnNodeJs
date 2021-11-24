const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const errorFormatter = require("../utils/validationErrorFormatter");

exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", {
    title: "Create A New Account",
    error: {},
    value: {},
  });
};

exports.signupPostController = async (req, res, next) => {
  let { username, email, password } = req.body;

  let errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.render("pages/auth/signup", {
      title: "Create A New Account",
      error: errors.mapped(),
      value: {
        username,
        email,
        password,
      },
    });
  }

  try {
    let hashedPassword = await bcrypt.hash(password, 11);

    let user = new User({ username, email, password: hashedPassword });

    let createdUser = await user.save();
    console.log("User Create Successfully", createdUser);
    res.render("pages/auth/signup", {
      title: "Create A New Account",
      error: {},
      value: {},
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", {
    title: "Login in to your Account",
    error: {},
    value: {},
  });
};

exports.loginPostController = async (req, res, next) => {
  let { email, password } = req.body;

  let errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.render("pages/auth/login", {
      title: "Login in to your Account",
      error: errors.mapped(),
    });
  }

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ message: "Invalid Credential" });
    }

    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ message: "Invalid Credential" });
    }

    console.log(user);
    res.render("pages/auth/login", {
      title: "Login in to your Account",
      error: {},
      value: {},
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.logoutController = (req, res, next) => {};
