import * as mongoose from 'mongoose';
import VersionRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository extends VersionRepository<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }
  public createUser(data) {
    console.log('User Created');
    return super.createUser(data);
  }
  public updateData(data) {
    return super.updateUser(data);
  }
  public deleteData(data) {
    return super.deleteUser(data);
  }
  public findData(data) {
    return super.findUser(data);
  }
  public countData( ) {
    return super.count( );
  }
}
