import { Product } from "src/domain/entities/Product";
import { ProductRepository } from "src/domain/repositories/ProductRepository";


const DISCOUNT_FACTOR = 0.5;
export class ProductFinder {
    constructor(private repository: ProductRepository) {
        
    }

    async findProduct(search: string) {
        if (!search || search.length < 3) {
            return [];
        }

        const isPalindrome = ProductFinder.isPalindrome(search);
        
        const products: Product[] = await this.repository.find(search, isPalindrome ? DISCOUNT_FACTOR : 1);
        
        return products;

    }


    static isPalindrome(search: string): boolean {
        if (!search || search.length < 3) {
            return false;
        }
        const reverse = search
            .split('')
            .reverse()
            .join('');
        return search === reverse;
    }
}