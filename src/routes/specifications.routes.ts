import { Request, Response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  new CreateSpecificationService(specificationsRepository).execute({
    name,
    description,
  });
  return response.status(201).send();
});

export { specificationsRoutes };
