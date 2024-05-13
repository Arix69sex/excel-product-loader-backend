import  Product  from '../models/product.js';

const getAllProducts = async (userId) => { 
    const products = await Product.findAll({ where: { userId: userId } });
    return products
};

export default getAllProducts;

