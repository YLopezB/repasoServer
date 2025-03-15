import Product from "../../models/Product.js"

let createProduct = async (request, response, next) => {
    try {
        let create = await Product.create(request.body)
        response.status(201).json({
            response: create
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let insertManyProducts = async (request, response, next) => {
    try {
        let manyProducts = await Product.insertMany(request.body)
        response.status(201).json({
            response: manyProducts
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

export { createProduct, insertManyProducts }