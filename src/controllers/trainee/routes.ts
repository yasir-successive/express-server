import trainee from "./Controller";
import { Router, Request, Response } from "express";
const traineeRoute: Router = Router();
traineeRoute.get("/", trainee.get);
traineeRoute.post("/", trainee.create);
traineeRoute.put("/", trainee.put);
traineeRoute.delete("/", trainee.delete);
export default traineeRoute;
