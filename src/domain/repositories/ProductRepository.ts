import { Product } from '../entities/Product';

export interface ProductRepository {
    /**
     * Find one or more products and drop the result off
     * @param search String to find
     */
    find(search: string): Promise<Product[]>;
}