import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../repositories/ISpecificationsRepository';

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    if (this.specificationsRepository.findByName(name)) {
      throw new Error('Specification already exists');
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
