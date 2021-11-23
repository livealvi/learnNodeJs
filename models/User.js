//Name, Email, Password, Profile

const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      require: true,
      maxLength: 15,
    },
    email: {
      type: String,
      trim: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: Profile,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
