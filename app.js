require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const setMiddleware = require("./middleware/middleware");
const setRoutes = require("./routes/routes");

const MONGODB_URI = `mongodb+srv://${config.get("db-username")}:${config.get(
  "db-password"
)}@cluster0.amhkf.mongodb.net/express-blog?retryWrites=true&w=majority`;

const app = express();

//Setup View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Using Middleware from Middleware Dir
setMiddleware(app);

// Using Routes from Route Dir
setRoutes(app);

const PORT = process.env.PORT || 8080;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    return console.log(error);
  });
