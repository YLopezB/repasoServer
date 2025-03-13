import { Router } from "express";
import { allProducts, productByName, ProductInStock } from "../controller/products/read.js";
import { createProduct, insertManyProducts } from "../controller/products/create.js";

const productsRouter = Router();

productsRouter.get("/allProducts", allProducts);
productsRouter.get("/name/:nameParams", productByName);
productsRouter.get("/inStock/:inStockParams", ProductInStock);
productsRouter.post("/createProduct", createProduct);
productsRouter.post("/insertMany", insertManyProducts);

export default productsRouter;