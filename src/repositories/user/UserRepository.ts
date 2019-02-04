import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { default as UserModel, userModel } from './UserModel';
export default class UserRepository {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public createUser(data: any): Promise<IUserModel> {
    return this.model.create({...data, _id: UserRepository.generateObjectId()});
  }
  public delete(data) {
    return this.model.deleteMany(data, (err) => {console.log(err); } );
  }
  public updateUser(oldData, newData) {
    return this.model.updateOne({ name: oldData }, { name: newData }, (err) => {console.log(err); } );
  }
  public getUser(data) {
    return this.model.findById(data, (err) => {console.log(err); } );
  }

  public countData() {
    return this.model.countDocuments();
  }
  public findOne(query) {
    return this.model.findOne(query);
  }

}
