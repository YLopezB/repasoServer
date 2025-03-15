import { Router } from "express";
import { allStores, storeByName, storeActive } from "../controller/store/read.js";
import { createStore, insertManyStores } from "../controller/store/create.js";


const storesRouter = Router();

storesRouter.get("/allStores", allStores);
storesRouter.get("/name/:nameParams", storeByName);
storesRouter.get("/active/:activeParams", storeActive);
storesRouter.post("/storeCreate", createStore);
storesRouter.post("/insertMany", insertManyStores);

export default storesRouter;


