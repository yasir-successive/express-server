"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    if (constants_1.permissions[moduleName]) {
        if (constants_1.permissions[moduleName][permissionType].includes(role) ||
            constants_1.permissions[moduleName]["all"].includes(role)) {
            console.log(`${role} have permission to ${permissionType} for the module ${moduleName}`);
        }
        else {
            console.log(`${role} do not have permission to ${permissionType} for the module ${moduleName}`);
        }
    }
    else {
        console.log(`${role} do not have permission to ${permissionType} for the module ${moduleName}`);
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map