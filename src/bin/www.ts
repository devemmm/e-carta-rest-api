import http from "http";
import app from "../app";

const port = process.env.PORT;

const server = http.createServer(app);
server.listen(port);

server.on("listening", () => console.log(`server is running ...`));
server.on("error", () => console.log(`Server stopped ...`));
