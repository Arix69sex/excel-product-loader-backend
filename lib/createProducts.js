import createProduct from "../interactors/createProduct.interactor.js"

const createProducts = async (userId, productsArray) => {
    const productsLength = productsArray.length

    const promises = []
    for (let i = 0; i < productsLength; i++) {
        const product = productsArray[i]
        promises.push(createProduct({userId: userId, ...product}))
    }

    const products = await Promise.all(promises)
    return products
}

export default createProducts;