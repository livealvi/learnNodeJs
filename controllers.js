const Contact = require("./Contact");

exports.getAllConnect = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("index", { contacts, error: {} });
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

  let error = {};

  if (!name) {
    error.name = "Please Provide A Name";
  }

  if (!phone) {
    error.phone = "Please Provide A Phone";
  }

  if (!email) {
    error.email = "Please Provide A Email";
  }

  let isError = Object.keys(error).length > 0;
  if (isError) {
    Contact.find()
      .then((contacts) => {
        return res.render("index", { contacts, error });
      })
      .catch((err) => {
        console.log(err);
        return res.json({ message: "Error Occurred" });
      });
  }

  let contact = new Contact({ name, phone, email });

  contact
    .save()
    .then((c) => {
      Contact.find().then((contacts) => {
        return res.render("index", { contacts, error: {} });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "Error Occurred" });
    });
};

exports.updateContact = (req, res) => {
  let { name, phone, email } = req.body;
  let { id } = req.params;

  Contact.findOneAndUpdate(
    { _id: id },
    { $set: { name, email, phone } },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error Occurred" });
    });
};

exports.deleteContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(() => {
      Contact.find().then((contacts) => {
        res.render("index", { contacts, error: {} });
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error Occurred" });
    });
};
