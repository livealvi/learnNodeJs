const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Import Route
const authRoute = require("./routes/authRoute");

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
];

app.use(middleware);

app.use("/auth", authRoute);

// root-route
app.get("/", (req, res) => {
  res.json("I am Running!");
});

const PORT = process.env.PORT || 8080;
mongoose
  .connect(
    "mongodb+srv://livealvi:Highme1@cluster0.amhkf.mongodb.net/express-blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    return console.log(error);
  });
