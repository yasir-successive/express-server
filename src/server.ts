import * as express from "express";

class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("index");
  }
  public bootStrap() {
    console.log("Inside bootstrap");
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    console.log("setupRoutes");
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("i am ok");
    });
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
      console.log("app is running");
    });
  }
}
export default Server;
