import { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({ dest: path.resolve(__dirname, '..', '..', 'tmp') });

categoriesRoutes.post('/', (request: Request, response: Response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request: Request, response: Response) =>
  listCategoryController.handle(request, response),
);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) =>
    importCategoryController.handle(request, response),
);

export { categoriesRoutes };
