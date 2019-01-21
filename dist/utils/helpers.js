"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)/;
    return regex.test(email);
}
exports.default = validateEmail;
//# sourceMappingURL=helpers.js.map