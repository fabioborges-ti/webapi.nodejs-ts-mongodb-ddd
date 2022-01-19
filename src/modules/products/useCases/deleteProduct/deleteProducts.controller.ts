import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProductUseCase } from './deleteProduct.useCase';

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const deleteProductUseCase = container.resolve(DeleteProductUseCase);
    await deleteProductUseCase.execute(_id);
    return response
      .status(200)
      .json({ message: `Produt Id '${_id}' removed successfuly` });
  }
}

export { DeleteProductController };
