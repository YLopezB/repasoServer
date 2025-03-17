const error_400 = (error, request, response, next)=>{
    if(error.message == "bad request"){
        return response.status(400).json({
            success: false,
            message: "error",
            response: error,
        })
    }
} 
export default error_400