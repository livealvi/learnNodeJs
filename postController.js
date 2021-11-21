exports.getAllPosts = (req, res) => {
  let { category, page, filters } = req.query;
  res.send("Render All Post");
};

exports.getSinglePosts = (req, res) => {
  res.send("I am Post = " + req.params.postId);
};

exports.createNewPost = (req, res) => {
  res.send("Create New Post");
};

exports.updatePost = (req, res) => {
  res.send("Update Your Post = " + req.params.postId);
};

exports.deletePost = (req, res) => {
  res.send("Delete Your Post = " + req.params.postId);
};
