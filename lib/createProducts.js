import createProduct from "../interactors/createProduct.interactor.js"
import fs  from 'fs';

const createProducts = async (userId) => {
    const productsArray = JSON.parse(fs.readFileSync('items.json', 'utf8'));
    const products = productsArray["products"]
    const productsLength = products.length
    const promises = []
    for (let i = 0; i < productsLength; i++) {
        const product = products[i]
        promises.push(createProduct({userId: userId, ...product}))
    }

    const productsCreated = await Promise.all(promises)
    return productsCreated
}

export default createProducts;