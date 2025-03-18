import Product from "../../models/Product.js"

let createProduct = async (request, response, next) => {
    try {
        let create = await Product.create(request.body)
        return response.status(201).json({
            response: create
        })
    } catch (error) {
        next(error);
    }
}

let insertManyProducts = async (request, response, next) => {
    try {
        let manyProducts = await Product.insertMany(request.body)
        return response.status(201).json({
            response: manyProducts
        })
    } catch (error) {
        next(error);
    }
}

export { createProduct, insertManyProducts }