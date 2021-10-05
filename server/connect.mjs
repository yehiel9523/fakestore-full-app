import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const productsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: Number,
    description: String,
    category: String,
    image: String,
})
const Product = mongoose.model('Products', productsSchema);

export function getProducts(filter = {}) {
    const qwery = {};
    if (filter.title) {
        qwery.title = new RegExp(filter.title, 'i')
    }
    return Product.find(qwery)

    // return db.collection('Products').find(qwery).toArray();
    // return db.collection('Products').find({}).toArray();
}
export function getProduct(id) {
    return Product.findOne({ _id: ObjectId(id) })
        // return db.collection('Product').findOne({ id: parseInt(id) });
}

export function addProduct(product) {
    const newProduct = new Product(product)
    return newProduct.save()


    // return db.collection('Products').insertOne(product);
}
export function deletePoduct(id) {
    return Product.findOneAndDelete({ _id: ObjectId(id) })
        // return db.collection('Products').deleteOne({ id: parseInt(id) || id });

}
export function updateProduct(id, newObj) {
    return Product.findOneAndUpdate({ _id: ObjectId(id) }, { $set: newObj })
        // return db.collection('Products').updateOne({ id: parseInt(id) || id }, { $set: newObj })
}