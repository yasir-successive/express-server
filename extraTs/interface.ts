import { permissions } from './constants';
export interface IPermissions {
    [GetUsers: string]:
    {
        all: string[],
        read: string[],
        write: string[],
        delete: string[],
    };
}
export interface IUsers {
     traineeEmail: 'trainee1@successive.tech';
  reviewerEmail: 'reviewer1@successive.tech';
 }
