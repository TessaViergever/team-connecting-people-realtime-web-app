import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const http = createServer(app);
const ioServer = new Server(http);
const port = process.env.PORT || 4242;

import indexRoute from "./routes/index.js";
import tamagotchiRoute from "./routes/tamagotchi.js";

// Start de socket.io server op
ioServer.on("connection", (socket) => {
  console.log("a user connected");
});

// Maak een nieuwe express app
const server = express();

// Stel de views in
server.set("view engine", "ejs");
server.set("views", "./views");

//  Stel de public map in
server.use(express.static("public"));

// Stel de files routes in
server.use("/", indexRoute);
server.use("/tamagotchi", tamagotchiRoute);

// Start een http server op het ingestelde poortnummer en log de url
http.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
