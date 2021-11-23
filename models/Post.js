// title, body, author, tags, thumbnail, readTime, likes, dislikes, comments

const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      maxLength: 100,
    },
    body: {
      type: String,
      require: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    tags: {
      type: String,
      require: true,
    },
    thumbnail: String,
    readTime: String,
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
