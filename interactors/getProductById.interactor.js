import { Product } from './models/Product';

const getProductById = async (userId, productId) => { 
    const product = await Product.findAll({ where: { userId: userId, id: productId } });
    return product
};

export default getProductById;

