import Product from "../../models/Product.js"

let allProducts = async (request, response, next)=>{
    try {
        let all = await Product.find();
        response.status(200).json({
            response: all
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let productByName = async (request, response, next)=> { 
    try {
        let nameQuery = await Product.find({name: request.params.nameParams})
        response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let ProductInStock = async (request, response, next)=> { 
    try {
        let inStockQuery = await Product.find({inStock: request.params.inStockParams})
        response.status(200).json({
            response: inStockQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

export { allProducts, productByName, ProductInStock }