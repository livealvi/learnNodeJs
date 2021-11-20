const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Render All Post");
});

router.post("/", (req, res) => {
  res.send("Create New Post");
});

router.put("/", (req, res) => {
  res.send("Update Your Post");
});

router.delete("/", (req, res) => {
  res.send("Delete Your Post");
});

module.exports = router;
