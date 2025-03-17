import Store from "../../models/Store.js"

let createStore = async (request, response, next) => {
    try {
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
        let manyStores = await Store.insertMany(request.body)
        return response.status(201).json({
            response: manyStores
        })
    } catch (error) {
        next(error);
    }
}

export { createStore, insertManyStores }