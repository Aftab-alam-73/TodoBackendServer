import mongoose, { Schema } from "mongoose";

const todoSchema=new Schema({
    title:{type:"string",required:true},
    description:{type:"string",required:true},
    status:{type:Boolean,required:true,default:false},
})

export default mongoose.model("Todo",todoSchema);