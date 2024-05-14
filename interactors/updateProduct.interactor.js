const updateProduct = async (product, newData) => { 
    await product.update(newData);
    const result = await product.save()
    return result
};

export default updateProduct;
