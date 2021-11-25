const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const errorFormatter = require("../utils/validationErrorFormatter");
const Flash = require("../utils/Flash");

exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", {
    title: "Create A New Account",
    error: {},
    value: {},
    flashMessage: Flash.getMessage(req),
  });
};

exports.signupPostController = async (req, res, next) => {
  let { username, email, password } = req.body;

  let errors = validationResult(req).formatWith(errorFormatter);

  req.flash("fail", "Please Check Your Form");
  if (!errors.isEmpty()) {
    return res.render("pages/auth/login", {
      title: "Create A New Account",
      error: errors.mapped(),
      value: {
        username,
        email,
        password,
        flashMessage: Flash.getMessage(req),
      },
    });
  }

  try {
    let hashedPassword = await bcrypt.hash(password, 11);

    let user = new User({ username, email, password: hashedPassword });

    await user.save();
    req.flash("success", "User Created successfully");
    redirect("/auth/login");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", {
    title: "Login in to your Account",
    error: {},
    flashMessage: Flash.getMessage(req),
  });
};

exports.loginPostController = async (req, res, next) => {
  let { email, password } = req.body;

  let errors = validationResult(req).formatWith(errorFormatter);

  req.flash("fail", "Please Check Your Form");
  if (!errors.isEmpty()) {
    return res.render("pages/auth/login", {
      title: "Login in to your Account",
      error: errors.mapped(),
      flashMessage: Flash.getMessage(req),
    });
  }

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      req.flash("fail", "Please Provide Valid Credentials");
      return res.render("pages/auth/login", {
        title: "Login in to your Account",
        error: {},
        flashMessage: Flash.getMessage(req),
      });
    }

    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      req.flash("fail", "Please Provide Valid Credentials");
      return res.render("pages/auth/login", {
        title: "Login in to your Account",
        error: {},
        flashMessage: Flash.getMessage(req),
      });
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save((error) => {
      if (error) {
        console.log(error);
        next(error);
      }
      req.flash("success", "Successfully Logged In");
      res.redirect("/dashboard");
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.logoutController = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    req.flash("success", "Successfully Logout");
    return res.redirect("/auth/login");
  });
};
