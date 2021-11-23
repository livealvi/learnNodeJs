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

exports.loginPostController = async (req, res, next) => {
  let { email, password } = req.body;

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
    res.render("pages/auth/login", { title: "Login in to your Account" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.logoutController = (req, res, next) => {};
