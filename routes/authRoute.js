const router = require("express").Router();
const signupValidator = require("../validator/auth/signupValidator");

const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController,
} = require("../controllers/authController");

router.get("/signup", signupGetController);
router.post("/signup", signupValidator, signupPostController);

router.get("/login", loginGetController);
router.post("/login", loginPostController);

router.get("/logout", logoutController);

module.exports = router;
