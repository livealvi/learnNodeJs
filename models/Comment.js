// post, user, body, replies, error

const { Schema, model } = require("mongoose");
const User = require("./User");
const Post = require("./Post");

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: Post,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
      require: true,
    },
    body: {
      type: String,
      trim: true,
      require: true,
    },
    replies: [
      {
        body: {
          type: String,
          require: true,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: User,
          require: true,
        },
        createdAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
