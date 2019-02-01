import { permissions } from "./../constants";
import * as jwt from "jsonwebtoken";
import { default as hasPermission } from "./permissions";
import UserRepository from './../../repositories/user/UserRepository';
export default (module, permissionType) => (req, res:Response, next) => {
  console.log("Inside middleware", module, permissionType);
  const token = req.headers.authorization;
  console.log("Token is", token);
  try {
    let decoded = jwt.verify(token, process.env.key);
    console.log(decoded);
    const role = decoded.role;
    const { id } = decoded;
    console.log(id);
    const userRepo = new UserRepository();
    userRepo.getUser({_id:id}).then(
      (data) => {
        console.log(data)
        req.body.userDetail = data 
        next();    
      }
    )    
   

    // if (hasPermission(module, role, permissionType)) {
    //   console.log(module, "has permission to", permissionType);
    // } else {
    //   next({ status: 401, message: "wrong permission" });
    // }
  } catch (err) {
    return next({
      message: " Unauthorized Acces",
      status: 403,
      error: "Not found"
    });
  }

  // next();
};
