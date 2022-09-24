import { Specification } from '../../model/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationUseCase };
