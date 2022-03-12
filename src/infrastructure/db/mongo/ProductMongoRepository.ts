import { Product } from "src/domain/entities/Product";
import { ProductRepository } from "src/domain/repositories/ProductRepository";

export class ProductMongoRepository implements ProductRepository {
    
    find(search: string): Promise<Product[]> {
        throw new Error("Method not implemented." + search);
    }
}