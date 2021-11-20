//user router
const router = require("express").Router();

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

module.exports = router;
