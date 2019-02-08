import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';
import { userModel } from './../../repositories/user/UserModel';

const user = new UserRepository(userModel);
class UserController {
  public async get(req: Request, res: Response) {
    const { skip= 0, limit = 10 } = req.body;
    const  id  = req.body;
    await user.findUser(skip, limit).then((data) => {
      res.status(200).send(successHandler('User Data', 200, data));
    });
  }
  public async post(req: Request, res: Response) {
    const data = await user.createUser(req.query);
    try {
      res.status(200).send(successHandler('User Created', 200, data));
    }
    catch (err) {
      console.log(err);
    }
  }
  public async put(req: Request, res: Response) {
    const { name1, id1 } = req.query;
    const data = await user.updateUser({ _id: id1, name: name1});
    try {
      res.status(200).send(successHandler('User Updated', 200, data));
    }
    catch (err) {
      console.log(err);
    }
  }
  public async delete(req: Request, res: Response) {
   const data = await user.delete(req.params);
   try {
      res.status(200).send(successHandler('User Deleted', 200, data));
    }
    catch ( err ) {
      console.log(err);
    }
  }

public createtoken(req: Request, res: Response, next) {
  res
  .status(200)
  .send(successHandler('Token Generated' , 200, req.body.token));
  }
}
export default new UserController();
