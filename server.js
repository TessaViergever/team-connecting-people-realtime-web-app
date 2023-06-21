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
ioServer.on("connection", (client) => {
  console.log(`user ${client.id} connected`);

  // Luister naar een disconnect van een gebruiker
  client.on("disconnect", () => {
    console.log(`user ${client.id} disconnected`);
  });

  // stuurt step naar alle clients verbonden met socket
  client.on("step", (step) => {
    console.log(step);
    ioServer.emit("step", step);
  });
});

// Stel de views in
app.set("view engine", "ejs");
app.set("views", "./views");

//  Stel de public map in
app.use(express.static("public"));

// Stel de files routes in
app.use("/", indexRoute);
app.use("/tamagotchi", tamagotchiRoute);

// Start een http server op het ingestelde poortnummer en log de url
http.listen(port, () => {
  console.log("listening on http://localhost:" + port + `/tamagotchi`);
});
