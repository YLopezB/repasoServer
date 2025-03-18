import Product from "../../models/Product.js"

let createProduct = async (request, response, next) => {
    try {
        if (!request.body) {
            throw new Error ('bad request')
            } 
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
        if (!Array.isArray(request.body) || request.body.length === 0) {
            throw new Error('bad request');
        }
        let manyProducts = await Product.insertMany(request.body)
        return response.status(201).json({
            response: manyProducts
        })
    } catch (error) {
        next(error);
    }
}

export { createProduct, insertManyProducts }