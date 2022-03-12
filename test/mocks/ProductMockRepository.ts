import {Product} from '../../src/domain/entities/Product'
import {ProductRepository} from '../../src/domain/repositories/ProductRepository'

const list: Product[] = [
  {
    id: 1,
    brand: 'ooy eqrceli',
    description: 'rlñlw brhrka',
    image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
    price: 498724,
  },
  {
    id: 2,
    brand: 'dsaasd',
    description: 'zlrwax bñyrh',
    image: 'www.lider.cl/catalogo/images/babyIcon.svg',
    price: 100000,
  },
  {
    id: 3,
    brand: 'weñxoab',
    description: 'hqhoy qacirk',
    image: 'www.lider.cl/catalogo/images/homeIcon.svg',
    price: 171740,
  },
  {
    id: 4,
    brand: 'sjlzxeo',
    description: 'pnyn rlxbewnk',
    image: 'www.lider.cl/catalogo/images/computerIcon.svg',
    price: 890348,
  },
  {
    id: 5,
    brand: 'peuoooypt',
    description: 'trcwl iagxxh',
    image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
    price: 814893,
  },
]

export class ProductMockRepository implements ProductRepository {
  
    async find(search: string): Promise<Product[]> {
        return list.filter(item => item.brand.includes(search) || item.description.includes(search))
    }
}
