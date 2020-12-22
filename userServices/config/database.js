import mongoose from 'mongoose';

const connect = () => {
  const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  mongoose.connect(
    `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
    option,
    (err) => {
      if (err) {
        console.log(`====>  Error connecting to ${config.stringMongo}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===> Connection with MongoDB established`);
      }
    }
  );
  mongoose.set('debug', true);
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
