import { IProduct } from '../models/interface/product';
import Product from '../models/Product';
import {
  ICreateProductDTO,
  IProductRepository,
  IUpdateProductDTO,
} from './interface/IProductRepository';

class ProductRepository implements IProductRepository {
  async create({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<IProduct> {
    const product = await Product.create({
      name,
      description,
      price,
    });
    return product;
  }

  async update({
    id,
    name,
    description,
    price,
  }: IUpdateProductDTO): Promise<IProduct> {
    const product = await Product.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        description: description,
        price: price,
        updated_at: new Date(),
      },
      { new: true },
    );
    return product;
  }

  async delete(_id: string): Promise<void> {
    await Product.findByIdAndDelete({ _id });
  }

  async list(): Promise<IProduct[]> {
    return await Product.find();
  }

  async getById(id: string): Promise<IProduct> {
    return await Product.findById(id);
  }

  async getByName(name: string): Promise<IProduct> {
    return await Product.findOne({ name });
  }
}

export { ProductRepository };
