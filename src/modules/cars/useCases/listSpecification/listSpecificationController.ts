import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './listSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationUseCase.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationController };
