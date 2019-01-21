"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function validateUsers(users) {
    const valid = [];
    const invalid = [];
    users.forEach(function (i, index) {
        const { traineeEmail, reviewerEmail } = i;
        if (helpers_1.default(traineeEmail) && helpers_1.default(reviewerEmail)) {
            valid.push(`user${index + 1}`);
        }
        else {
            invalid.push(`user${index + 1}`);
        }
    });
    if (valid.length == 0) {
        console.log(`valid users are 0`);
    }
    else {
        console.log(`valid users are ${valid}`);
    }
    if (invalid.length == 0) {
        console.log(`invalid users are 0`);
    }
    else {
        console.log(`invalid users are ${invalid}`);
    }
    console.log(`${valid.length} valid and ${invalid.length} invalid users`);
}
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map