import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProductsUseCase } from './listProducts.useCase';

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    const products = await listProductsUseCase.execute();
    return response.status(200).json({ products: products });
  }
}

export { ListProductsController };
