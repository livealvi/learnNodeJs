const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("*", function (req, res) {
  res.send("<h1>404 NOT PAGE FOUND</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING PORT ${PORT}`);
});
