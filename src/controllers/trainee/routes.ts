import validationHandler from '../../libs/routes/validationHandler'
import trainee from "./Controller";
import { Router, Request, Response } from "express";
import validation from './validation';
const traineeRoute: Router = Router();
traineeRoute.get("/",validationHandler(validation.get), trainee.get);
traineeRoute.post("/", validationHandler(validation.post), trainee.create);
traineeRoute.put("/", validationHandler(validation.put), trainee.put);
traineeRoute.delete("/", validationHandler(validation.delete), trainee.delete);
export default traineeRoute;


