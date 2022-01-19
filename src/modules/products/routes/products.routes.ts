import { Router } from 'express';

import { CreateProductController } from '../useCases/createProduct/createProduct.controller';
import { DeleteProductController } from '../useCases/deleteProduct/deleteProducts.controller';
import { ListProductsController } from '../useCases/listProducts/listProducts.controller';
import { ShowProductController } from '../useCases/showProduct/showProducts.controller';
import { UpdateProductController } from '../useCases/updateProduct/updateProduct.controller';

const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const showProductController = new ShowProductController();
const listProductsController = new ListProductsController();

const productsRoutes = Router();

productsRoutes.post('/', createProductController.handle);
productsRoutes.put('/:_id', updateProductController.handle);
productsRoutes.delete('/:_id', deleteProductController.handle);
productsRoutes.get('/:_id', showProductController.handle);
productsRoutes.get('/', listProductsController.handle);

export { productsRoutes };
