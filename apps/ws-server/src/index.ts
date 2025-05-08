import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3002,
});

server.on("connection", async (socket) => {
  const res = await client.user.create({
    data: {
      email: "test1@test.com",
      password: "test1",
    },
  });
  console.log(res);

  socket.send("Hello from server");

  console.log("Client connected");
});

server.on("error", (error) => {
  console.error(error);
});

server.on("listening", () => {
  console.log("Server is listening on port 3002");
});

server.on("close", () => {
  console.log("Server is closed");
});
