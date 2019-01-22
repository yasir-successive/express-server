import { IPermissions } from './interface';
export const HEAD_TRAINER = "head-trainer";
export const TRAINER = "trainer";
export const TRAINEE = "trainee";

export const permissions:IPermissions = {
  getUsers: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  },
  setUsers: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
}
  

