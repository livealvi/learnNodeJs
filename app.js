const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let Schema = mongoose.Schema;
let testSchema = new Schema({
  name: String,
});

let Test = mongoose.model("Test", testSchema);

app.get("/", (req, res) => {
  let test = new Test({
    name: "Alvi Hasan",
  });
  test
    .save()
    .then((t) => {
      res.json(t);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        error: "Error Occured",
      });
    });
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    `mongodb+srv://livealvi:Highme1@cluster0.amhkf.mongodb.net/test-db?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
