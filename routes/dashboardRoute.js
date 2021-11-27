const router = require("express").Router();
const { isAuthenticated } = require("../middleware/authMiddleware");

const {
  dashboardGetController,
} = require("../controllers/dashboardController");

router.get("/", isAuthenticated, dashboardGetController);

router.get("/create-profile");
router.post("/create-profile");

router.get("/edit-profile");
router.post("/edit-profile");

module.exports = router;
