import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
    constructor(option: any, collection: any) {
        const versionSchema = Object.assign({
            createdBy: {
                default: Date.now,
                required: true,
                type: Date,
            },
            deleteAt: {
                required: false,
                type: Date,
            },
            originalId: {
                    required: true,
                type: String,
                },
        }, option);
        super(versionSchema, collection);
    }
}
