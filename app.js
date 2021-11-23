const express = require("express");
const morgan = require("morgan");

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

// root-route
app.get("/", (req, res) => {
  res.render("pages/auth/singup", { title: "Create A New Account" });
  res.json("I am Running!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
