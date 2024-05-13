import  Product  from '../models/product.js';

const createProduct = async (data) => { 
    const product = Product.build(data)
    await product.save()
    return product
};

export default createProduct;

