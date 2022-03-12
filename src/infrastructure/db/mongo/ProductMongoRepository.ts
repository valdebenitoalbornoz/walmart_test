import {Product} from '../../../domain/entities/Product'
import {ProductRepository} from '../../../domain/repositories/ProductRepository'
import ProductModel from './ProductSchema'
export class ProductMongoRepository implements ProductRepository {
  async find(search: string, discountFactor: number = 1): Promise<Product[]> {
    return (await ProductModel.aggregate([
      {
        $match: {
          $or: [
            {
              brand: {$regex: search, $options: 'i'},
            },
            {
              description: {$regex: search, $options: 'i'},
            },
          ],
        },
      },
      {
        $addFields: {
          price: { $multiply: ['$price', discountFactor] }
        },
      },
    ])) as Product[]
  }
}
