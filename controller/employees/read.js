import Employee from "../../models/Employee.js";

let allEmployees = async (request, response, next)=>{
    try {
        let all = await Employee.find()
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        next(error);
    }
}

let employeeByName = async (request, response, next)=>{
    try {
        let nameQuery = await Employee.find({name: request.params.nameParams})
        return response.status(200).json({
            response: nameQuery
        })
    } catch (error) {
        next(error);        
    }
}

let employeeActive = async (request, response, next)=>{
    try {
        let activeQuery = await Employee.find({active: request.params.activeParams})
        return response.status(200).json({
            response: activeQuery
        })
    } catch (error) {
        next(error);
    }
}

export { allEmployees, employeeByName, employeeActive }