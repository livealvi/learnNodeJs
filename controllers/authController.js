const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Create A New Account" });
};

exports.signupPostController = async (req, res, next) => {
  let { username, email, password } = req.body;

  try {
    let hashedPassword = await bcrypt.hash(password, 11);

    let user = new User({ username, email, password: hashedPassword });

    let createdUser = await user.save();
    console.log("User Create Successfully", createdUser);
    res.render("pages/auth/signup", { title: "Create A New Account" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", { title: "Login in to your Account" });
};

exports.loginPostController = (req, res, next) => {};

exports.logoutController = (req, res, next) => {};
