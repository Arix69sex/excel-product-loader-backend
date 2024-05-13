import  Product  from '../models/product.js';

const getProductById = async (userId, productId) => { 
    const product = await Product.findAll({ where: { userId: userId, id: productId } });
    return product
};

export default getProductById;

