import { permissions } from "./../constants";
import * as jwt from "jsonwebtoken";
import { default as hasPermission } from "./permissions";
export default (module, permissionType) => (req, res, next) => {
  console.log("Inside middleware", module, permissionType);
  const token = req.header("Authorization");
  console.log("Token is", token);
  try {
    let decoded = jwt.verify(token, process.env.key);
    console.log(decoded);
    const role = decoded.role;
    if (hasPermission(module, role, permissionType)) {
      console.log(module, "has permission to", permissionType);
    } else {
      next({ status: 401, message: "wrong permission" });
    }
  } catch (err) {
    return next({
      message: " Unauthorized Acces",
      status: 403,
      error: "Not found"
    });
  }

  next();
};
