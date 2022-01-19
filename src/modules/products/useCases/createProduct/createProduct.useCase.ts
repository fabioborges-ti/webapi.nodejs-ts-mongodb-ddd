import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IProduct } from '../../models/interface/product';
import {
  ICreateProductDTO,
  IProductRepository,
} from '../../repositories/interface/IProductRepository';

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<IProduct> {
    const alreadyExists = await this.productRepository.getByName(name);
    if (alreadyExists) throw new AppError('Product already exists');
    const product = await this.productRepository.create({
      name,
      description,
      price,
    });
    return product;
  }
}

export { CreateProductUseCase };
