import * as bodyParser from 'body-parser';
import * as express from 'express';
import { errorHandler, notFoundRoute } from './libs/routes/';
import Database from './libs/routes/Database';
import router from './router';

class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.use('/health-check', (req, res) => {
      res.send('i am ok');
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongo: mongoUrl },
    } = this;
    console.log('mongoUrl');
    Database.open(mongoUrl)
      .then((res) => {
        app.listen(port, (err) => {
          if (err) {
            throw err;
          }
          console.log(res);
          console.log(`app is running on ${ port }`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}
export default Server;
