"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
const utils_1 = require("./utils");
exports.users = [
    {
        traineeEmail: "trainee1@successive.tech",
        reviewerEmail: "reviewer1@successive.tech"
    },
    {
        traineeEmail: "trainee1@successive.tech",
        reviewerEmail: "reviewer1@successive.tech"
    }
];
patterns_1.diamods(5);
patterns_1.equilateral(5);
utils_1.hasPermission("getUsers", "trainee", "write");
utils_1.hasPermission("getUser", "trainee", "delete");
utils_1.hasPermission("get", "trainee", "read");
utils_1.validateUsers(exports.users);
//# sourceMappingURL=index.js.map