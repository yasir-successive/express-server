import * as jwt from 'jsonwebtoken';
import { userModel } from './../../repositories/user/UserModel';
import UserRepository from './../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (
  module, permissionType) => (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  const repository = new UserRepository();
  try {
  const user = jwt.verify(token, process.env.key);
  const { _id } = user;
  console.log('id is ----', _id);
  repository.findData({ _id }).then((result) => {
    if (!result.name) {
      next({
        error: 'Unauthorized Access',
        message: 'User not match',
        status: 403,
      });
    } else if (!hasPermission(module, result.role, permissionType)) {
      next({ status: 401, message: 'Wrong Permission' });
    } else {
      req.body = result.id;
      next();
    }
  })
  .catch((err) => console.log('inside catch error ----', err));
} catch (err) {
  next({ status: 403, message: 'Unauthorized Access'});
}

};
