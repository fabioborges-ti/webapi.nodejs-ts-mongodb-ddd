import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IProductRepository } from '../../repositories/interface/IProductRepository';

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}
  async execute(_id: string): Promise<void> {
    const productExists = await this.repository.getById(_id);
    if (!productExists) throw new AppError('Product not found');
    await this.repository.delete(_id);
  }
}

export { DeleteProductUseCase };
