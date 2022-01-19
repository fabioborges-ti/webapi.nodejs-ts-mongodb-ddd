import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './createProduct.useCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body;
    const createProductUseCase = container.resolve(CreateProductUseCase);
    const result = await createProductUseCase.execute({
      name,
      description,
      price,
    });
    return response.status(201).json({ product: result });
  }
}

export { CreateProductController };
