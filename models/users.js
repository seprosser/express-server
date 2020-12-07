console.log('** do some db shit here **');

// Dummy model from the docs

const UserModel = mongoose.model('User', new Schema({ name: String }));

const userDocument = new UserModel({ name: 'Foo' });
await userDocument.save();

const userFromDb = await UserModel.findOne({ name: 'Foo' });
