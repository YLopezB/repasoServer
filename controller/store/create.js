import Store from "../../models/Store.js"

let createStore = async (request, response, next) => {
    try {
        let create = await Store.create(request.body)
        response.status(201).json({
            response: create
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let insertManyStores = async (request, response, next) => {
    try {
        let manyStores = await Store.insertMany(request.body)
        response.status(201).json({
            response: manyStores
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

export { createStore, insertManyStores }