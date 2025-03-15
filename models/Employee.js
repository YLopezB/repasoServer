import {Schema, model} from "mongoose";

let collection = "employees"
let schema = Schema({
    name:{type:String, required:true},
    job:{type:String, required:true},
    salary:{type:Number, required:true},
    gender:{type:String, required:true},
    active:{type:Boolean, required:true}
},{
    timestamps:true
});

let Employee = model(collection, schema);

export default Employee;