import { Request, Response, Router } from 'express';
import { traineeRoute } from './controllers/trainee';
import { UserRoute } from './controllers/user';
const router: Router = Router();
router.use('/trainee', traineeRoute);
router.use('/user', UserRoute);
export default router;
