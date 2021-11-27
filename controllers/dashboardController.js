const Flash = require("../utils/Flash");
const Profile = require("../models/Profile");

exports.dashboardGetController = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({
      user: req.user._id,
    });
    if (profile) {
      return res.render("pages/dashboard/dashboard", {
        title: "My Dashboard",
        flashMessage: Flash.getMessage(req),
      });
    }

    res.redirect("/dashboard/create-profile");
  } catch (error) {
    next(error);
  }
};

exports.createProfileGetController = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      return res.redirect("/dashboard/edit-profile");
    }

    res.render("page/dashboard/create-profile", {
      title: "Create Your Profile",
      flashMessage: Flash.getMessage(req),
    });
  } catch (error) {
    next(error);
  }
};
