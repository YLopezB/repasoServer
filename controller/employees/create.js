import Employee from "../../models/Employee.js";

let createEmployee = async (request, response, next) => {
    try {
        let create = await Employee.create(request.body)
        response.status(201).json({
            response: create
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

let insertManyEmployees = async (request, response, next) => {
    try {
        let manyEmployees = await Employee.insertMany(request.body)
        response.status(201).json({
            response: manyEmployees
        })
    } catch (error) {
        response.status(500).json({
            response: error
        })
    }
}

export { createEmployee, insertManyEmployees }