import { Request, Response, Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request: Request, response: Response) =>
  createSpecificationController.handle(request, response),
);

specificationsRoutes.get('/', (request: Request, response: Response) =>
  listSpecificationController.handle(request, response),
);

export { specificationsRoutes };
