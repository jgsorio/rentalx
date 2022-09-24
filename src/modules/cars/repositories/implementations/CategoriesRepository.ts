import { Category } from '../../model/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  // Singleton pattern
  public static getInstance(): CategoriesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoriesRepository();
    }

    return this.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | null {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
