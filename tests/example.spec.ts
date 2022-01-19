import 'reflect-metadata';

import mongoose from 'mongoose';

import Product from '../src/modules/products/models/Product';

describe('Process', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('MongoDB server not initialized');
    }

    await mongoose.connect(process.env.MONGO_URL, {
      autoCreate: true,
      autoIndex: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
  });

  it('should create a new product', async () => {
    await Product.create({
      name: 'Mouse Gamer',
      description: 'Mouse Gamer',
      price: 200,
    });

    const list = await Product.find({});

    expect(list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Mouse Gamer',
        }),
      ]),
    );
  });
});
