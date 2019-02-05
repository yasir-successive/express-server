import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
    createat: Date;
    deleteAt: Date;
    originalId: string;
}
