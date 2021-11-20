const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

//user router
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am login route");
});

router.get("/logout", (req, res) => {
  res.send("I am logout route");
});

router.get("/singup", (req, res) => {
  res.send("I am singup route");
});
//user router

app.use("/user", router);

// root-route
app.get("/", (req, res) => {
  res.send("<h1>I am Running!</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
