import * as mongoose from 'mongoose';
export default interface IUserModel extends mongoose.Document {
  name: string;
  _id: string;
  role: string;
  email: string;
}
