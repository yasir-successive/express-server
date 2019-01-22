import config from "./config/configuration";
import Server from "./server";
console.log("Inside config");
const server = new Server(config);
console.log("-----------5----------", server.bootStrap);

server.bootStrap().run();
