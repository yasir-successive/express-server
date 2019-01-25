import { Router, Request, Response } from "express";
import { traineeRoute } from "./controllers/trainee";
const router: Router = Router();
router.use("/trainee", traineeRoute);
export default router;
