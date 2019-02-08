import { IPermissions } from './interface';
export const HEAD_TRAINER = 'head-trainer';
export const TRAINER = 'trainer';
export const TRAINEE = 'trainee';

export const permissions: IPermissions = {
  getUsers: {
    all: [HEAD_TRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },
  setUsers: {
    all: [HEAD_TRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },
};
