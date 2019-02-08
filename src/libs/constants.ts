import { IPermissions } from './interface';
export const HEADTRAINER: string = 'head-trainer';
export const TRAINEE: string = 'trainee';
export const TRAINER: string = 'trainer';
export const TRAINEEE: string = 'traineee';
export const permissions: IPermissions = {
traineee: {
all: [HEADTRAINER],
delete: [],
read: [TRAINEE, TRAINER],
write: [HEADTRAINER],
},
};
