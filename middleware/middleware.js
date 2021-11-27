const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const { bindUserWithRequest } = require("./authMiddleware");
const setLocals = require("./setLocals");
const config = require("config");

const MONGODB_URI = `mongodb+srv://${config.get("db-username")}:${config.get(
  "db-password"
)}@cluster0.amhkf.mongodb.net/express-blog?retryWrites=true&w=majority`;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
  saveUninitialized: false,
  expires: 1000 * 60 * 60 * 2,
});

const middleware = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: config.get("secret"),
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
  flash(),
  bindUserWithRequest(),
  setLocals(),
];

module.exports = (app) => {
  middleware.forEach((m) => {
    app.use(m);
  });
};
