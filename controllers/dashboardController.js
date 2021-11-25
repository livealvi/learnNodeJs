const Flash = require("../utils/Flash");

exports.dashboardGetController = (req, res, next) => {
  res.render("pages/dashboard/dashboard", {
    title: "My Dashboard",
    flashMessage: Flash.getMessage(req),
  });
};
