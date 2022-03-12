import {Middleware} from 'koa'
import { ProductFinder } from '../../../../application/usecases/ProductFinder';
import { ProductMongoRepository } from '../../../db/mongo/ProductMongoRepository';

const repository = new ProductMongoRepository()

export const productFinderController: Middleware = async (ctx, next) => {
    const { search } = ctx.request.query as any;
    const finder = new ProductFinder(repository);
    ctx.body = await finder.findProduct(search);
    await next();
}
