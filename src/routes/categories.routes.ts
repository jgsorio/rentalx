import { Request, Response, Router } from 'express';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request: Request, response: Response) =>
  listCategoryController.handle(request, response),
);

export { categoriesRoutes };
