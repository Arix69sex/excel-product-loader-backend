import { Product } from './models/Product';

const getAllProducts = async (userId) => { 
    const product = await Product.findAll({ where: { userId: userId } });
    return product
};

export default getAllProducts;

