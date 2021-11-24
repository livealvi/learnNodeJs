const User = require("../models/User");

exports.bindUserWithRequest = async () => {
  return (req, res, next) => {
    if (!req.session.isLoggedIn) {
      return next();
    }

    try {
      let user = await User.findById(req.session.user_id);
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};
