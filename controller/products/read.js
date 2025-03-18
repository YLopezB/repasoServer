import Product from "../../models/Product.js"

let allProducts = async (request, response, next)=>{
    try {
        let all = await Product.find();
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        next(error);
    }
}

let productByName = async (request, response, next)=> { 
    try {
        if (!request.params.nameParams) {
            throw new Error('bad request'); 
        }
        let nameQuery = await Product.find({name: request.params.nameParams})
        return response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        next(error);
    }
}

let ProductInStock = async (request, response, next)=> { 
    try {
        if (request.params.inStockParams !== "true" && request.params.inStockParams !== "false") {
            throw new Error('bad request');
        }
        let inStockQuery = await Product.find({inStock: request.params.inStockParams})
        return response.status(200).json({
            response: inStockQuery
        })
    } catch (error) {
        next(error);
    }
}

export { allProducts, productByName, ProductInStock }