import * as express from 'express'
import user from './Controller';

import { authMiddleWare } from "../../libs/routes"
import UserController from './Controller'

const userRouter = express.Router();
userRouter
.get("/",authMiddleWare("Trainee", "delete"), user.get)
.post("/", user.post)
.put("/", user.put)
.delete("/:_id", user.delete);

export default userRouter