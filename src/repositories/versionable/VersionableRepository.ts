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
        console.log('----------------', data);
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
public updateUser(data) {
    return this.findOne({originalId: data._id, deletedAt: undefined}).lean().then( (result) => {
    this.createUser(Object.assign(result, { name: data.name, deleteAt: new Date()})).then( (result1) => {
    this.model.updateOne( {_id: result1._id}, {originalId: data._id}, (err) => {
    console.log('error');
    });
    });
    this.model.updateOne({_id: data._id},
        {$set: { deletedAt: true}}, {upsert: true}).then((err) => {
        console.log(err);
    });
    });
    }
    public findUser(data) {
        return this.model.findOne(data);
    }
    public findOne(query) {
        return this.model.findOne(query);
    }

}
