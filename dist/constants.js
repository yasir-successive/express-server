"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEAD_TRAINER = "head-trainer";
exports.TRAINER = "trainer";
exports.TRAINEE = "trainee";
exports.permissions = {
    getUsers: {
        all: [exports.HEAD_TRAINER],
        read: [exports.TRAINEE, exports.TRAINER],
        write: [exports.TRAINER],
        delete: []
    },
    setUsers: {
        all: [exports.HEAD_TRAINER],
        read: [exports.TRAINEE, exports.TRAINER],
        write: [exports.TRAINER],
        delete: []
    }
};
//# sourceMappingURL=constants.js.map