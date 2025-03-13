import { Router } from "express";
import storesRouter from "./storeRouter.js"
import productsRouter from "./productsRouter.js"
import employeesRouter from "./employeesRouter.js"


const routerIndex = Router();

routerIndex.use("/stores", storesRouter);
routerIndex.use("/products", productsRouter);
routerIndex.use("/employees", employeesRouter);

export default routerIndex;