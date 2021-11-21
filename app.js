const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { title: "EJs is Easy" });
});

app.get("*", function (req, res) {
  res.send("<h1>404 NOT PAGE FOUND</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING PORT ${PORT}`);
});
