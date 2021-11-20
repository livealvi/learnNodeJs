const express = require("express");
const morgan = require("morgan");
const userRouter = require("./userRoute");
const postRouter = require("./postRoute");

const app = express();
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/post", postRouter);

// root-route
app.get("/", (req, res) => {
  res.send("<h1>I am Running!</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
