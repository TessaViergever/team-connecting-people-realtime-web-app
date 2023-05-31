import express from "express";

//exporteert de route in het server.js mapje -> import indexRoute from ./routes/index.js
const tamagotchiRoute = express.Router(); // difinieert de index.js route (staat in het mapje sever)

tamagotchiRoute.get("/", (request, response) => {
  response.render("tamagotchi");
});

//exporteert de route in het server.js mapje -> import indexRoute from ./routes/index.js
export default tamagotchiRoute;

