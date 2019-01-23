import config from "./config/configuration";
import Server from "./server";
console.log("Inside config", config);
const server = new Server(config);
server.bootstrap().run();
