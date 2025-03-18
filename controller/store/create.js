import Store from "../../models/Store.js"

let createStore = async (request, response, next) => {
    try {
        if (!request.body.name) {
            throw new Error ('bad request')
            } 
        let create = await Store.create(request.body)
        return response.status(201).json({
            response: create
        })
    } catch (error) {
        next(error);
    }
}

let insertManyStores = async (request, response, next) => {
    try {
        if (!Array.isArray(request.body) || request.body.length === 0) {
            throw new Error('bad request');
        }
        let manyStores = await Store.insertMany(request.body)
        return response.status(201).json({
            response: manyStores
        })
    } catch (error) {
        next(error);
    }
}

export { createStore, insertManyStores }