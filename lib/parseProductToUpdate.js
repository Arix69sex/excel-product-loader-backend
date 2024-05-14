import createProduct from "../interactors/createProduct.interactor.js"

const parseProductToUpdate = async (product, newData) => {
    const params = product
    if (typeof newData.handle !== "undefined") {
        Object.assign(params, {
            handle: newData.handle
        })
    }

    if (typeof newData.title !== "undefined") {
        Object.assign(params, {
            title: newData.title
        })
    }

    if (typeof newData.description !== "undefined") {
        Object.assign(params, {
            description: newData.description
        })
    }

    if (typeof newData.sku !== "undefined") {
        Object.assign(params, {
            sku: newData.sku
        })
    }

    if (typeof newData.grams !== "undefined") {
        Object.assign(params, {
            grams: newData.grams
        })
    }

    if (typeof newData.stock !== "undefined") {
        Object.assign(params, {
            stock: newData.stock
        })
    }

    if (typeof newData.price !== "undefined") {
        Object.assign(params, {
            price: newData.price
        })
    }

    if (typeof newData.comparePrice !== "undefined") {
        Object.assign(params, {
            comparePrice: newData.comparePrice
        })
    }

    if (typeof newData.barcode !== "undefined") {
        Object.assign(params, {
            barcode: newData.barcode
        })
    }

    return params
}

export default parseProductToUpdate;