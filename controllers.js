const Contact = require("./Contact");

exports.getAllConnect = (req, res) => {};

exports.getSingleConnect = (req, res) => {};

exports.createContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = new Contact({ name, phone, email });

  contact
    .save()
    .then((c) => {
      res.json(c);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error Occurred" });
    });
};

exports.updateContact = (req, res) => {};

exports.deleteContact = (req, res) => {};
