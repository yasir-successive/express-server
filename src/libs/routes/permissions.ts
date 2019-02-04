import { permissions } from '../constants';

export default function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType.includes(role)] ||
      permissions[moduleName].all
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
