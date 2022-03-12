import { ProductFinder } from '../../../src/application/usecases/ProductFinder';

import { ProductMockRepository } from '../../mocks/ProductMockRepository';

const repository = new ProductMockRepository();

describe('findProducts', () => {
    const finder = new ProductFinder(repository);
    it ('should return products and aplicates discount', async () => {
        const search = 'dsaasd';
        const foundProducts = await finder.findProduct(search);
        expect(foundProducts.length).toBe(1);
        expect(foundProducts[0].brand.includes(search));
        expect(foundProducts[0].price).toBe(50000);
    })

    it ('should return normal price', async () => {
        const search = 'dsaas';
        const foundProducts = await finder.findProduct(search);
        expect(foundProducts.length).toBe(1);
        expect(foundProducts[0].brand.includes(search));
        expect(foundProducts[0].price).toBe(100000);
    });
})



describe('isPalindrome', () => {
    it('should return true on valid palindrome', () => {
        const search = 'abcdeedcba';
        const isPalindrome = ProductFinder.isPalindrome(search);
        expect(isPalindrome).toBe(true);
    })


    it ('should return false on invalid palindrome', () => {
        const search = 'contrátenme ya? :)';
        const isPalindrome = ProductFinder.isPalindrome(search);
        expect(isPalindrome).toBe(false);
    })
    
    it ('should return false on empty searching', () => {
        const search = '';
        const isPalindrome = ProductFinder.isPalindrome(search);
        expect(isPalindrome).toBe(false);
    })
})