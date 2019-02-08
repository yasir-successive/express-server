import { permissions } from '../constants';

export default function hasPermission(
  moduleName: string,
  permissionType: string,
  role: string,
): boolean {
  console.log(moduleName, role, permissionType, permissions[moduleName]);

  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName].all.includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
