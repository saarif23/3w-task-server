const express = require("express");
const cors = require("cors");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [],
      credentials: true,
    })
  );
  app.use(express.json());
};
module.exports = applyMiddleware;
