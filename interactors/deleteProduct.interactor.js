import Product from "../models/product.js";

const deleteProduct = async (product) => { 
    await Product.destroy({
        where: {
            id: product.id
        }
    })
    return product
};

export default deleteProduct;
