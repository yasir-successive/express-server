import { diamods, equilateral } from './patterns';
import { hasPermission, validateUsers } from './utils';

let users = [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
  },
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  }
];

diamods(5);
equilateral(5);
hasPermission('getUsers', 'trainee', 'write');
validateUsers(users);
