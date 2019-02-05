import * as mongoose from 'mongoose';
import VersionRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
// const versionRepository = new VersionRepository(userModel);
export default class UserRepository extends VersionRepository<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }
  public createUser(data) {
    console.log('-------', data);
    return super.createUser(data);
  }
  public updateData(oldData, newData) {
    return super.updateUser(oldData, newData);
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
