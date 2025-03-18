import Employee from "../../models/Employee.js";

let createEmployee = async (request, response, next) => {
    try {
        if (!request.body) {
            throw new Error ('bad request')
            }    
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
        if (!Array.isArray(request.body) || request.body.length === 0) {
            throw new Error('bad request');
        }
        let manyEmployees = await Employee.insertMany(request.body)
        return response.status(201).json({
            response: manyEmployees
        })
    } catch (error) {
        next(error);
    }
}

export { createEmployee, insertManyEmployees }