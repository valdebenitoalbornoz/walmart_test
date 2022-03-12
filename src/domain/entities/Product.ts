export abstract class Product {
    id: number;
    brand: string;
    description: string;
    image: string;
    price: number;

    constructor(product: Product) {
        this.brand = product.brand;
        this.id = product.id;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
    }

    discount(percentage: number) {
        this.price = this.price * 100 / percentage;
        return this;
    }
}