"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./config/configuration");
const server_1 = require("./server");
console.log("Inside config");
const server = new server_1.default(configuration_1.default);
console.log("-----------5----------", server.bootStrap);
server.bootStrap().run();
//# sourceMappingURL=index.js.map