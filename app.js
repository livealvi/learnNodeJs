const express = require("express");
const morgan = require("morgan");

const app = express();

function customMiddleware(req, res, next) {
  if (req.url == "/help") {
    res.send("<h1>Sorry, this page is block by admin.</h1>");
  }

  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

const middleware = [customMiddleware, tinyLogger()];

app.use(middleware);

//app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.get("/about", (req, res) => {
  //res.send("<h1>I am about page!</h1>");
  res.json({
    message: "I am about page! from route handler",
  });
});

app.get("/help", (req, res) => {
  res.send("<h1>I am help page!</h1>");
});

// root-route
app.get("/", (req, res) => {
  res.send("<h1>I am Running!</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 NOT FOUND!</>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
