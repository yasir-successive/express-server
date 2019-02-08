import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import tokenRoutes from '../../libs/routes/tokenRoutes';
import { TRAINEEE } from './../../libs/constants';
import user from './Controller';
export const userRouter = express.Router();
userRouter
.get('/', authMiddleWare('TRAINEE', 'read'), user.get)
.post('/', authMiddleWare(TRAINEEE, 'read'), user.post)
.post('/login', tokenRoutes(), user.createtoken)
.put('/', authMiddleWare('TRAINEE', 'read'), user.put)
.delete('/:_id', authMiddleWare('TRAINEE', 'read'), user.delete);
