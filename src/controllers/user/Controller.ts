import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepository from './../../repositories/user/UserRepository';

export default class UserController {
  public get(req: Request, res: Response) {
    const user = new UserRepository();
    const id = req.body;
    user.findData({ _id: id }).then((data) => {
      res.status(200).send(successHandler('User Data', 200, data));
    });
  }
  public async post(req: Request, res: Response) {
    const user = new UserRepository();
    console.log(req.query);
    try {
      const data = req.query;
      console.log(user);
      const responseData = await user.createUser(data);
      res.status(200).send(successHandler('User Created', 200, responseData));
    } catch (err) {
      res.status(400).send('Not create ');
    }
  }
  public put(req: Request, res: Response) {
    const { id1, name1 } = req.query;
    const user = new UserRepository();
    user.updateUser({ _id: id1, name: name1}).then((data) => {
      res.status(200).send(successHandler('USer Updated', 200, data));
      console.log('User Updated ');
    });
  }
  public delete(req: Request, res: Response) {
    const user = new UserRepository();
    user.deleteData(req.params).then((data) => {
      res.status(200).send(successHandler('User Deleted', 200, data));
    });
  }
}
