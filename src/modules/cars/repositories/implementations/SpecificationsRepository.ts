import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationsRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationRepository();
    }

    return this.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification | null {
    return this.specifications.find(
      (specification) => specification.name === name,
    );
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationRepository };
