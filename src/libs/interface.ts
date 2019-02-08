export interface IPermissions {
  [TRAINEE: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
