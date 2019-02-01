import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
import { default as UserModel, userModel } from "./UserModel";
export default class UserRepository {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = userModel;
  }
  public createUser(data: any): Promise<IUserModel> {
    return this.model.create({...data, _id:UserRepository.generateObjectId()})
  }
  public delete(data) {
    return this.model.deleteMany(data, function(err){})
  }
  public updateUser(oldData, newData) {
    return this.model.updateOne({ name:oldData }, { name:newData },err=> {} )
  }
  public getUser(data) {
    return this.model.findById(data,function(err){});
  }

  public countData() {
    return this.model.countDocuments();
  }


}

interface User {
  _id: string;
  name: string;
}
