import { ICreateProductDTO } from '../../dtos/createProduct.dto';
import { IUpdateProductDTO } from '../../dtos/updateProduct.dto';
import { IProduct } from '../../models/interface/product';

interface IProductRepository {
  create({ name, description, price }: ICreateProductDTO): Promise<IProduct>;
  update({
    id,
    name,
    description,
    price,
  }: IUpdateProductDTO): Promise<IProduct>;
  delete(_id: string): Promise<void>;
  list(): Promise<IProduct[]>;
  getById(_id: string): Promise<IProduct>;
  getByName(name: string): Promise<IProduct>;
}

export { ICreateProductDTO, IProductRepository, IUpdateProductDTO };
