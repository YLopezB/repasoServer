import {Schema, model} from "mongoose";

let collection = "products"
let schema = Schema({
    name:{type:String, required:true},
    brand:{type:String, required:true},
    type:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    inStock:{type:Boolean, required:true}
},{
    timestamps:true
});

let Product = model(collection, schema);

export default Product;