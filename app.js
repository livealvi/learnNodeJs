const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router");

const app = express();
app.use(morgan("dev"));

app.use("/user", userRouter);

// root-route
app.get("/", (req, res) => {
  res.send("<h1>I am Running!</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
