import { Router } from "express";
import { allStores } from "../controller/store/read.js";


const routerIndex = Router();

routerIndex.use("/stores", allStores)

export default routerIndex;