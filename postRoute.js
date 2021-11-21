const router = require("express").Router();
const {
  getAllPosts,
  getSinglePosts,
  createNewPost,
  updatePost,
  deletePost,
} = require("./postController");

router.get("/", getAllPosts);

router.get("/:postId", getSinglePosts);

router.post("/", createNewPost);

router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

module.exports = router;
