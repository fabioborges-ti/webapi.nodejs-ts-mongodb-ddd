import { inject, injectable } from 'tsyringe';

import { IProduct } from '../../models/interface/product';
import { IProductRepository } from '../../repositories/interface/IProductRepository';

@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}
  async execute(): Promise<IProduct[]> {
    return await this.repository.list();
  }
}

export { ListProductsUseCase };
