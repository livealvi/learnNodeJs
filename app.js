const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", router);

app.get("/", (req, res) => {});

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
