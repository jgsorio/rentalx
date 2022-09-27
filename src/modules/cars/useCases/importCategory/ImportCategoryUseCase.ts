import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);
    const parseFile = parse();
    stream.pipe(parseFile);
    parseFile.on('data', async (line) => {
      const [name, description] = line;
      if (!this.categoryRepository.findByName(name)) {
        this.categoryRepository.create({ name, description });
      }
    });
    parseFile.on('end', async () => {
      fs.promises.unlink(file.path);
    });
  }
}

export { ImportCategoryUseCase };
