import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
class TraineeController {
  public static getInstance(instance: TraineeController) {
    if (!instance) {
      instance = new TraineeController();
    }
    return instance;
  }
  public get(req: Request, res: Response) {
    const data = [
      {
        name: 'trainee',
      },
      {
        name: 'trainee2',
      },
    ];
    const showData = req.body.userDetail;
    res.status(200);

    res.send(successHandler('message', '200', showData));
    console.log('Inside get method');
  }
  public create(req: Request, res: Response) {
    const { name, id } = req.body;
    if (!name) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'name is not present' });
    }
    if (!id) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'ID is not present' });
    } else {
      res.status(200).send({
        data: { name, id },
        message: 'Successfully Created',
        status: 'ok',
      });
    }
  }
  public put(req: Request, res: Response) {
    const { name, id } = req.body;
    if (!id) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'ID is not present' });
    } else {
      res.status(200).send({
        data: { name, id },
        message: 'Successfully Updated',
        status: 'ok',
      });
    }
  }
  public delete(req: Request, res: Response) {
    const { name, id } = req.params;
    res.status(200).send({
      data: 'null',
      message: 'Successfully deleted',
      status: 'ok',
    });
  }
}

export default TraineeController.getInstance(new TraineeController());
