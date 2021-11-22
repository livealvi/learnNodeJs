const Contact = require("./Contact");

exports.getAllConnect = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error Occurred" });
    });
};

exports.getSingleConnect = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error Occurred" });
    });
};

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
