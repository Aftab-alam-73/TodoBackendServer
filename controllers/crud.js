import Todo from '../model/todo.js'
// Create a Task.
export const create=async(req,res)=>{
    const {title,description} = req.body;
   
   
    try{

        const data=new Todo({title:title,description:description});
        const savedata= await data.save();
        res.send(savedata);
    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}
// Get all the Tasks.
export const readAllTheTask=async(req,res)=>{
    try{
        const data=await Todo.find()
        res.send(data);

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}
// Get a single Task based on the id.
export const readSingleTask=async(req,res)=>{
    const {id}=req.params;
    try{
        const data=await Todo.findById(id);
        res.send(data);

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}

// Update a Task.

export const updateTask = async(req, res) =>{
    const {id,title,description}=req.body;
    try{
        await Todo.findByIdAndUpdate(id,{title:title,description:description});
        res.send("Task updated successfully");

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}
//Task Completed.

export const taskCompleted = async(req, res) =>{
    const {id}=req.body;
    try{
        await Todo.findByIdAndUpdate(id,{status:true});
        res.send("Task completed successfully");

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}
// Get all completed tasks
export const GetAllCompletedTask = async(req, res) =>{
  
    try{
        const data=await Todo.find({status:true});
        res.send(data);

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}
//Delete Task.

export const DeleteTask = async(req, res) =>{
    const {id}=req.params;
    try{
        await Todo.findByIdAndDelete(id);
        res.send("Task deleted successfully");

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}

// Search a Task based on title and description.
export const searchTask=async(req,res)=>{
    const {title,description} = req.query;

    try{
        const data=await Todo.findOne({title: title, description: description})
        if(!data) return res.send("Task not found")
        return res.send(data);

    }catch(err){
        return res.json({message:"Something went wrong",error:err.message});
    }
}