import mongoose, { Mongoose } from 'mongoose';

const connect = async (): Promise<Mongoose> =>
  await mongoose.connect('mongodb://localhost:27017/curso_novo', {
    autoIndex: true,
    autoCreate: true,
  });

export { connect };
