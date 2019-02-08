
import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import UserController from './Controller';
const user = new UserController();
export const userRouter = express.Router();
userRouter
.get('/', authMiddleWare('TRAINEE', 'read'), user.get)
.post('/', authMiddleWare('TRAINEE', 'write'), user.post)
  .put('/', authMiddleWare('TRAINEE', 'read'), user.put)
  .delete('/:id', authMiddleWare('TRAINEE', 'read'), user.delete);
