import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
    createAt: Date;
    deleteAt: Date;
    originalId: string;
}
