const authRoute = require("./authRoute");
const dashboardRoute = require("./dashboardRoute");

const routes = [
  {
    path: "/auth",
    handler: authRoute,
  },
  {
    path: "/dashboard",
    handler: dashboardRoute,
  },
  {
    path: "/",
    handler: (req, res) => {
      res.json("I am Running!");
    },
  },
];

module.exports = (app) => {
  routes.forEach((r) => {
    app.use(r.path, r.handler);
  });
};