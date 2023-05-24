import express from "express";

const indexRoute = express.Router(); // difinieert de index.js route (staat in het mapje sever)
indexRoute.get("/", (request, response) => {});
//exporteert de route in het server.js mapje -> import indexRoute from ./routes/index.js

export default indexRoute;
//exporteert de route in het server.js mapje -> import indexRoute from ./routes/index.js
