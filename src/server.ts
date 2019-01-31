import { mongo } from "mongoose";
import { config } from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler, notFoundRoute } from "./libs/routes/";
import router from "./router";
import Database from "./libs/routes/Database";
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
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public setupRoutes() {
    const { app, config } = this;
    app.use("/health-check", (req, res) => {
      res.send("i am ok");
    });
    app.use("/api", router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongo: mongoUrl }
    } = this;
    console.log(mongoUrl);
    Database.open(mongoUrl)
      .then(res => {
        app.listen(port, err => {
          if (err) {
            throw err;
          }
          console.log(res);
          console.log(`app is running on ${port}`);
        });
      })
      .catch(result => {
        console.log(result);
      });
  }
}
export default Server;
