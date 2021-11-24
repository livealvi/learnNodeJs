const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

// Import Route
const authRoute = require("./routes/authRoute");

const MONGODB_URI =
  "mongodb+srv://livealvi:Highme1@cluster0.amhkf.mongodb.net/express-blog?retryWrites=true&w=majority";
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
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
];

app.use(middleware);

app.use("/auth", authRoute);

// root-route
app.get("/", (req, res) => {
  res.json("I am Running!");
});

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
