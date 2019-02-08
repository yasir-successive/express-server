import * as jwt from 'jsonwebtoken';
import { userModel } from './../../repositories/user/UserModel';
import UserRepository from './../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (module, permissionType) => async  (req, res, next) => {
  const token = req.header('Authorization');
  const repository = new UserRepository(userModel);
  try {
  const user = jwt.verify(token, process.env.key);
  const { _id } = user._id;
  const result = await repository.findOne(_id);
  try {
    console.log(result);
    const role = result.role;
    console.log(permissionType);
    if (!hasPermission(module, 'trainee', permissionType)) {
      next({ status: 401, message: 'Wrong Permission' });
    } else {
      req.body.id = result._id;
      next();
    }
  }
  catch (err) {
    console.log(err);
  }
} catch (err) {
  next({ status: 403, message: 'Unauthorized Access'});
}

};
