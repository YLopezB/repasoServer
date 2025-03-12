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

export { allStores } 
