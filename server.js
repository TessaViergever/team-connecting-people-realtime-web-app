import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const http = createServer(app);
const ioServer = new Server(http);

import indexRoute from "./routes/index.js";
import tamagotchiRoute from "./routes/tamagotchi.js";

// Start de socket.io server op
ioServer.on("connection", (socket) => {
  console.log("a user connected");
});

// Maak een nieuwe express app
const server = express();

// Stel het poortnummer in
server.set("port", process.env.PORT || 8080);

// Stel de views in
server.set("view engine", "ejs");
server.set("views", "./views");

//  Stel de public map in
server.use(express.static("public"));

// Stel de files routes in
server.use("/", indexRoute);
server.use("/tamagotchi", tamagotchiRoute);

// Start met luisteren
server.listen(server.get("port"), () => {
  console.log(
    `Application started on http://localhost:${server.get("port")}/tamagotchi`
  );
});
