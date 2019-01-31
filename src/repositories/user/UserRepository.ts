import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
import { default as UserModel, userModel } from "./UserModel";
export default class userRepository {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = userModel;
  }
  public create(options: User): Promise<IUserModel> {
    console.log("------->>>>>>>>>>>", options);
    return this.model.create({
      name: options.name,
      _id: options._id
    });
  }
}

interface User {
  _id: string;
  name: string;
}
