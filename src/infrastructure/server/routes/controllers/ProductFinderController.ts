import {Middleware} from 'koa'
import { ProductFinder } from '../../../../application/usecases/ProductFinder';
import { ProductMongoRepository } from '../../../db/mongo/ProductMongoRepository';

const repository = new ProductMongoRepository()

export const productFinderController: Middleware = async ctx => {
    ctx.body = await new ProductFinder(repository)
        .findProduct('abababa');
}
