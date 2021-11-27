require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const config = require("config");

// Import Route
const setRoutes = require("./routes/routes");

// Import Middleware
const { bindUserWithRequest } = require("./middleware/authMiddleware");
const setLocals = require("./middleware/setLocals");

const MONGODB_URI = `mongodb+srv://${config.get("db-username")}:${config.get(
  "db-password"
)}@cluster0.amhkf.mongodb.net/express-blog?retryWrites=true&w=majority`;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
  saveUninitialized: false,
  expires: 1000 * 60 * 60 * 2,
});

const app = express();

//Setup View Engine
app.set("view engine", "ejs");
app.set("views", "views");

//Middleware array
const middleware = [
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: config.get("secret"),
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
  bindUserWithRequest(),
  setLocals(),
  flash(),
];

app.use(middleware);

// Using Routes from Route Dir
setRoutes(app);

const PORT = process.env.PORT || 8080;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    return console.log(error);
  });
