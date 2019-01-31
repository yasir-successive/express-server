import * as mongoose from "mongoose";
import seedData from "../seedData";
export default class Database {
  static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        mongoUrl,
        { useNewUrlParser: true },
        err => {
          if (err) {
            reject("Error occured");
          } else {
            console.log("Successful connected");
            resolve({ a: "Hello" });
            seedData();
          }
        }
      );
    });
  }
  static disconnect() {
    mongoose.disconnect();
    console.log("Disconnect");
  }
}
