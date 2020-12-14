import mongoose from 'mongoose';

const connect = async () => {
  const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
      option
    );
    console.log('Success Conections');
    return 'success';
  } catch (err) {
    return err;
  }
};

const close = async (client) => {
  try {
    await mongoose.connection.close();
    return console.log('closed');
  } catch (err) {
    console.log(err);
    return err;
  }
};

mongoose.connection.on('error', (err) => {
  console.log(err);
});

export { connect, close };
