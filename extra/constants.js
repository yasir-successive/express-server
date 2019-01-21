const HEAD_TRAINER = "head-trainer";
const TRAINER = "trainer";
const TRAINEE = "trainee";

export const permissions = {
  getUsers: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
