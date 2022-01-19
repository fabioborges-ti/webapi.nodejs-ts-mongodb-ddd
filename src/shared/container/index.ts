import { container } from 'tsyringe';

import { IProductRepository } from '../../modules/products/repositories/interface/IProductRepository';
import { ProductRepository } from '../../modules/products/repositories/product-repository';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
