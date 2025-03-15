import Store from "../../models/Store.js"

let allStores = async (request, response, next)=>{
    try {
        let all = await Store.find();
        response.status(200).json({
            response: all
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let storeByName = async (request, response, next)=> { 
    try {
        let nameQuery = await Store.find({name: request.params.nameParams})
        response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let storeActive = async (request, response, next)=> { 
    try {
        let activeQuery = await Store.find({active: request.params.activeParams})
        response.status(200).json({
            response: activeQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

export { allStores, storeByName, storeActive }
