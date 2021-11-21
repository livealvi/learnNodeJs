const express = require("express");
const morgan = require("morgan");
const contactRouters = require("./contactRouters");

const app = express();
app.use(morgan("dev"));

app.use("/contacts", contactRouters);

app.get("*", function (req, res) {
  res.send("<h1>Please, Use The Correct Routes</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING PORT ${PORT}`);
});
