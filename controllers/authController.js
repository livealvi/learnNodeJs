const User = require("../models/User");

exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Create A New Account" });
};

exports.signupPostController = async (req, res, next) => {
  let { username, email, password } = req.body;

  let user = new User({ username, email, password });

  try {
    let createdUser = await user.save();
    console.log("User Create Successfully", createdUser);
    res.render("pages/auth/signup", { title: "Create A New Account" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginGetController = (req, res, next) => {};

exports.loginPostController = (req, res, next) => {};

exports.logoutController = (req, res, next) => {};
