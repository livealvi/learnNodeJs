const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "I am About Page" });
});

app.get("/help", (req, res) => {
  res.render("pages/help", { title: "I am Help Page" });
});

app.get("/", (req, res) => {
  let post = {
    title: "Test Title",
    body: "Test Body",
    published: true,
  };

  let posts = [
    {
      title: "Test One",
      author: "Alvi Hasan",
    },
    {
      title: "Test Two",
      author: "Alvi Hasan",
    },
    {
      title: "Test Three",
      author: "Alvi Hasan",
    },
    {
      title: "Test Four",
      author: "Alvi Hasan",
    },
  ];

  res.render("pages/index", { title: "EJs is Easy", post, posts });
});

app.get("*", function (req, res) {
  res.send("<h1>404 NOT PAGE FOUND</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING PORT ${PORT}`);
});
