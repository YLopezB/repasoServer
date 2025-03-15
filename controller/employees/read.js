import Employee from "../../models/Employee.js";

let allEmployees = async (request, response, next)=>{
    try {
        let all = await Employee.find()
        response.status(200).json({
            response: all
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
        
    }
}

let employeeByName = async (request, response, next)=>{
    try {
        let nameQuery = await Employee.find({name: request.params.nameParams})
        response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
        
    }
}

let employeeActive = async (request, response, next)=>{
    try {
        let activeQuery = await Employee.find({active: request.params.activeParams})
        response.status(200).json({
            response: activeQuery
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
        
    }
}

export { allEmployees, employeeByName, employeeActive }