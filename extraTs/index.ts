import { IPermissions } from './interface';
import { diamods, equilateral } from "./patterns";
import { hasPermission, validateUsers } from "./utils";

export const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

diamods(5);
equilateral(5);
hasPermission("getUsers", "trainee", "write");
hasPermission("getUser", "trainee", "delete");
hasPermission("get", "trainee", "read");
validateUsers(users);
