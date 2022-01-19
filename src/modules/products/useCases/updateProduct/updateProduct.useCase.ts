import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IProduct } from '../../models/interface/product';
import {
  IProductRepository,
  IUpdateProductDTO,
} from '../../repositories/interface/IProductRepository';

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute({
    id,
    name,
    description,
    price,
  }: IUpdateProductDTO): Promise<IProduct> {
    const productExists = await this.productRepository.getById(id);
    if (!productExists) throw new AppError('Product not found');
    const product = await this.productRepository.update({
      id,
      name,
      description,
      price,
    });
    return product;
  }
}

export { UpdateProductUseCase };
