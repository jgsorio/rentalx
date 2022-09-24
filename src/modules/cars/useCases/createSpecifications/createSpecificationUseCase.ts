import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../../repositories/ISpecificationsRepository';

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    if (this.specificationRepository.findByName(name)) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
