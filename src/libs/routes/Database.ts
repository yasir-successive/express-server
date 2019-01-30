import * as mongoose from "mongoose";
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
          }
        }
      );

      const schema1 = new mongoose.Schema({
        name: String,
        age: Number,
        EmailId: String,
        Address: String
      });
      const person = mongoose.model("person", schema1);
      console.log(
        new person({
          name: "trainee",
          age: 20,
          EmailId: "xyz@gmail.com",
          Address: " London 11/23 Ak house santa road,UK"
        })
      );
    });
  }
  static disconnect() {
    mongoose.disconnect();
    console.log("Disconnect");
  }
}
