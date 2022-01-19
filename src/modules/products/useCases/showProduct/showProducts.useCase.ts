import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IProduct } from '../../models/interface/product';
import { IProductRepository } from '../../repositories/interface/IProductRepository';

@injectable()
class ShowProductUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}

  async execute(_id: string): Promise<IProduct> {
    const productExists = await this.repository.getById(_id);
    if (!productExists) throw new AppError('Product not found');
    return await this.repository.getById(_id);
  }
}

export { ShowProductUseCase };
