import { Schema, model } from 'mongoose';
import { Product } from '../../../domain/entities/Product';

const schema = new Schema<Product>({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
})

export default model<Product>('Product', schema);