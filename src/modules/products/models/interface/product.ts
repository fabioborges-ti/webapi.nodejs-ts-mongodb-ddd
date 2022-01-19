import { Document } from 'mongoose';

interface IProduct extends Document {
  _id?: string;
  name: string;
  description: string;
  price: number;
}

export { IProduct };
