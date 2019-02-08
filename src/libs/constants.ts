import { IPermissions } from './interface';
export const GetUsers: string = 'getUsers';
export const HeadTrainer: string = 'Head-Trainee';
export const Trainer: string = 'trainer';
export const Trainee: string = 'trainee';
export const permissions: IPermissions = {
  TRAINEE: {
    all: [HeadTrainer],
    delete: [],
    read: ['Trainee', 'Head-Trainee'],
    write: [Trainer, HeadTrainer],
  },
};
