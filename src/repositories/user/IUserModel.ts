import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';

export default interface IUserModel extends IVersionableModel {
  id: string;
  name: string;
  password: string;
  role: string;
  email: string;
}
