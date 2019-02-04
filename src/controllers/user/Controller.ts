
import { NextFunction, Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';

class UserController {
public get(req: Request, res: Response) {
const showData = req.body.userDetail;
console.log(showData);
const { _id } = req.query;
const user = new UserRepository();
user.getUser(_id).then((data) => {
res.status(200).send(successHandler('User Data', 'Successiveful fetch', showData));
});
}
public post(req: Request, res: Response) {
const user = new UserRepository();
user.createUser(req.query).then((data) => {
res.status(200).send(successHandler('User Created', 'Successfully Created', data));
});
}
public put(req: Request, res: Response) {
const { oldName, newName } = req.query;
const user = new UserRepository();
user.updateUser(oldName, newName).then((data) => {
res.status(200).send(successHandler('User Updated', 200, data));
});
}
public delete(req: Request, res: Response) {
const user = new UserRepository();
user.delete(req.params).then((data) => {
res.status(200).send(successHandler('User Deleted', 200, data));
});
}
}
export default new UserController();
