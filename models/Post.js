// title, body, author, tags, thumbnail, readTime, likes, dislikes, comments

const { Schema, model } = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");

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
      ref: User,
      require: true,
    },
    tags: {
      type: String,
      require: true,
    },
    thumbnail: String,
    readTime: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: User,
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: User,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: Comment,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
