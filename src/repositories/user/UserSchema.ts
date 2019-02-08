import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(option: any) {
    const Schema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };
    super(Schema, option);
  }
}
