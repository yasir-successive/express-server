import * as mongoose from "mongoose";
export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const Schema = {
      _id: String,
      name: String
    };
    super(Schema, option);
  }
}
