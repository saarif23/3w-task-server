const express = require("express");
const connectDB = require("./db/connectDB");
const applyMiddleware = require("./middlewares/applyMiddlewares");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// all routes
const userRoutes = require('./routes/Users/index')
//------------------all middlewares------------------------
applyMiddleware(app);
app.use(userRoutes)

app.get("/health", (req, res) => {
  res.send("Welcome to the task server  ....");
});

app.all("*", (req, res, next) => {
  const error = new Error(`the request url  is invalid ${req.url}`);
  error.status == 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
  });
});

module.exports = app;
