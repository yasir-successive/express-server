const HEAD_TRAINER = "head-trainer";
const TRAINER = "trainer";
const TRAINEE = "trainee";

const permissions = {
  getUsers: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType.includes(role)] ||
      permissions[moduleName]["all"].includes[role]
    ) {
      console.log(
        `${role} have permission to ${permissionType} for the module ${moduleName}`
      );
    } else {
      console.log(
        `${role} do not have permission to ${permissionType} for the module ${moduleName}`
      );
    }
  } else {
    console.log(
      `${role} do not have permission to ${permissionType} for the module ${moduleName}`
    );
  }
}

hasPermission("getUsers", "trainee", "write");
hasPermission("getUsers", "trainee", "read");
