import { Router } from "express";
import { allEmployees, employeeByName, employeeActive } from "../controller/employees/read.js";
import { createEmployee, insertManyEmployees } from "../controller/employees/create.js";

const employeesRouter = Router();

employeesRouter.get("/allEmployees", allEmployees);
employeesRouter.get("/name/:nameParams", employeeByName);
employeesRouter.get("/active/:activeParams", employeeActive);
employeesRouter.post("/employeeCreate", createEmployee);
employeesRouter.post("/insertMany", insertManyEmployees);

export default employeesRouter;
