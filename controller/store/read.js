import Store from "../../models/Store.js"

let allStores = async (request, response, next)=>{
    try {
        let all = await Store.find();
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        next(error);
    }
}

let storeByName = async (request, response, next)=> { 
    try {
        if (!request.params.nameParams) {
            throw new Error('bad request'); 
        }
        let nameQuery = await Store.find({name: request.params.nameParams})
        return response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        next(error);
    }
}

let storeActive = async (request, response, next)=> { 
    try {
        if (request.params.activeParams !== "true" && request.params.activeParams !== "false") {
            throw new Error('bad request');
        }
        let activeQuery = await Store.find({active: request.params.activeParams})
        return response.status(200).json({
            response: activeQuery
        })
    } catch (error) {
        next(error);
    }
}

export { allStores, storeByName, storeActive }
