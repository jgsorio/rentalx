import { Request, Response, Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { ListCategoryService } from '../services/ListCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  new CreateCategoryService(categoriesRepository).execute({
    name,
    description,
  });
  return response.status(201).send();
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const categories = new ListCategoryService(categoriesRepository).execute();
  return response.json(categories);
});

export { categoriesRoutes };
