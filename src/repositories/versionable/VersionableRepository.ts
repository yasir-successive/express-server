import * as mongoose from 'mongoose';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }
    public generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public createUser(data): Promise<D> {
        const id = this.generateObjectId();
        console.log(id);
        return this.model.create({...data, _id: id, originalId: id});
    }
    public deleteUser(data) {
        return this.model.deleteMany(data, (err) => {
            console.log('Error');
        });
    }
    public count( ) {
        return this.model.countDocuments();
    }
    public updateUser(olddata, newData) {
        return this.model.updateOne(
            { name: olddata },
            { name: newData},
            (err) => {
                console.log('Error');
            },
        );
    }
    public findUser(data) {
        return this.model.findOne(data);
    }
}
