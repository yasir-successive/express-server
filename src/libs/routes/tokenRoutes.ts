import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import IUserModel from 'src/repositories/user/IUserModel';
import UserRepository from '../../repositories/user/UserRepository';
import { userModel } from './../../repositories/user/UserModel';
const userRepo = new UserRepository(userModel);
export default function tokenRoutes() {
    return (req, res, next) => {
        const { emailid, pass } = req.body;
        userRepo.findData(emailid).then((result: IUserModel) => {
            if (!result) {
                next({
                    error: 'Invalid Email',
                    message: 'Unathorised access',
                    status: '401',
                });
            }
            const { password } = result;
            if (bcrypt.compareSync(pass, password)) {
                const token = jwt.sign({ result }, process.env.key, { expiresIn: 15 * 60 });
                req.body.token = token;
                next();
            }
            else {
                next({
                    error: 'Wrong password',
                    message: 'Unathorized access',
                    status: 401,
                });
            }
        })
        .catch((err) => {
            next({
                error: 'Not found the email',
                message: ' Unathorizes access',
                status: '401',
            });
        });
    };
}
