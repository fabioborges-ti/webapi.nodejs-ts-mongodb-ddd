import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProductUseCase } from './showProducts.useCase';

class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const showProductUseCase = container.resolve(ShowProductUseCase);
    const product = await showProductUseCase.execute(_id);
    return response.status(200).json({ product: product });
  }
}

export { ShowProductController };
