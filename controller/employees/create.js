import Employee from "../../models/Employee.js";

let createEmployee = async (request, response, next) => {
    try {
        let create = await Employee.create(request.body)
        return response.status(201).json({
            response: create
        })
    } catch (error) {
        next(error);
    }
}

let insertManyEmployees = async (request, response, next) => {
    try {
        let manyEmployees = await Employee.insertMany(request.body)
        return response.status(201).json({
            response: manyEmployees
        })
    } catch (error) {
        next(error);
    }
}

export { createEmployee, insertManyEmployees }