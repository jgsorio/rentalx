import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoryRepository';

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error('Category already exists');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
