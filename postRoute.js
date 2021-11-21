const router = require("express").Router();

router.get("/", (req, res) => {
  let { category, page, filters } = req.query;
  res.send("Render All Post");
});

router.get("/:postId", (req, res) => {
  res.send("I am Post = " + req.params.postId);
});

router.post("/", (req, res) => {
  res.send("Create New Post");
});

router.put("/:postId", (req, res) => {
  res.send("Update Your Post = " + req.params.postId);
});

router.put("/", (req, res) => {
  res.send("Update Your Post");
});

router.delete("/:postId", (req, res) => {
  res.send("Delete Your Post = " + req.params.postId);
});

module.exports = router;
