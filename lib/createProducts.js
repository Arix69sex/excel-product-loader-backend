

const createProducts = async (userId, productsArray) => {
    const productsLength = productsArray.productsLength

    const promises = []
    for (let i = 0; i < productsLength; i++) {
        const product = productsArray[i]
        promises.push(createProducts({userId: userId, ...product}))
    }

    await Promise.all(promises)
}