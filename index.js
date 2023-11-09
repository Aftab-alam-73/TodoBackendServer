import express from "express";
import mongoose from "mongoose";
import CrudRoute from './route/crud.js'
const app=express();
app.use(express.json())
app.use('/api/todo',CrudRoute)

app.get('/hello', (req, res) => {
    res.send("Hello world")
})

app.all('/*',(req, res) => {
    res.send("There is no such endpoint")
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
    connect()
})

const connect = ()=>{

    mongoose.connect("mongodb+srv://aftabalam:aftabalam@cluster0.jnbxblt.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("connected to db")
    }).catch((err)=>{
        console.log("something went wrong",err);
    })
}
