import { config } from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler, notFoundRoute } from "./libs/routes";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("Inside Constructer");
  }
  public bootstrap() {
    console.log("Inside bootstrap");
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
    console.log("setupRoutes");
    const { app, config } = this;
    app.use("/health-check", (req, res) => {
      res.send("i am ok");
    });
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`app is running on ${port}`);
    });
  }
}
export default Server;
