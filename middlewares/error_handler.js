const error_haldler = (error, request, response, next)=>{
    return response.status(500).json({
        status : 500,
        success: false,
        message: "error",
        response: error
    })
} 
export default error_haldler