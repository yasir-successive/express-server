"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEAD_TRAINER = "head-trainer";
exports.TRAINER = "trainer";
const TRAINEE = "trainee";
exports.permissions = {
    getUsers: {
        all: [exports.HEAD_TRAINER],
        read: [TRAINEE, exports.TRAINER],
        write: [exports.TRAINER],
        delete: []
    },
    setUsers: {
        all: [exports.HEAD_TRAINER],
        read: [TRAINEE, exports.TRAINER],
        write: [exports.TRAINER],
        delete: []
    }
};
//# sourceMappingURL=constants.js.map