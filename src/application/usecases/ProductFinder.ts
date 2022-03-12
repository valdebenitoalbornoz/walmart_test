import { ProductRepository } from "src/domain/repositories/ProductRepository";

export class ProductFinder {
    constructor(private repository: ProductRepository) {
        
    }

    async findProduct(search: string) {
        let products = await this.repository.find(search);
        if (!products || !products.length) {
            
        }
        const isPalindrome = ProductFinder.isPalindrome(search);
        if (isPalindrome) {
            products = products.map(product => product.discount(50))
        }

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