import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
}

export { ICategoryRepository, ICreateCategoryDTO };
