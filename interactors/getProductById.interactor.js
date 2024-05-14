import  Product  from '../models/product.js';

const getProductById = async (productId) => { 
    const product = await Product.findByPk(productId);
    return product
};

export default getProductById;

