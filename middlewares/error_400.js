const error_400 = (error, request, response, next)=>{
    if(error.status === 400){
        console.log(error)
        return response.status(400).json({
            success: false,
            message: "error",
            response: "bad request"
        })
    }
} 
export default error_400