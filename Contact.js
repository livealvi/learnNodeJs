const { Schema } = require("mongoose");

const connectSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  phone: {
    type: String,
    require: true,
    trim: true,
    minlength: 9,
    maxlength: 15,
  },
});

const Contact = model("Contact", connectSchema);

module.exports = Contact;
