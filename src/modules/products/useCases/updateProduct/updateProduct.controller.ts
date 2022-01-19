import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { UpdateProductUseCase } from './updateProduct.useCase';

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const { id, name, description, price } = request.body;
    if (_id !== id) throw new AppError('Product Id is invalid');
    const updateProductUseCase = container.resolve(UpdateProductUseCase);
    const product = await updateProductUseCase.execute({
      id,
      name,
      description,
      price,
    });
    return response.status(200).json({ product: product });
  }
}

export { UpdateProductController };
