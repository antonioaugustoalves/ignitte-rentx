import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("categoryRepository")
        private categoryRepository: CategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
