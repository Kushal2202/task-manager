const Task = require("./models/taskModel");
//create a task
const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.statues(200).json(task)
    }catch(error){
        res.status(500).json({msg: error.message});

    }
};
//get all task
const getTasks = async (req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(200),json(tasks)
    } catch (error) {
        req.status(500).json({msg:error.message});
    }
};
//get a single task
const getTask = async(req,res) => {
   
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        if(!task){
            return res.statues(404).json(`NO task with id: ${id}`);

        }
        res.statues(200).json(task)
    } catch (error) {
        res.statues(500).json({msg:error.message});
    }
};

//Delete Task
const deleteTask = async(req,res) =>{
try {
    const {id} = req.params
    const task = await Task.findByIdAndDelete(id);
    if(!task){
        return res.statues(404).json(`NO task with id: ${id}`);

    }

    res.statues(200).send("Task deleted")
} catch (error) {
    res.statues(500).json({msg:error.message});
}

};

//update a task

const updateTask = async (req,res) => {

    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true, runValidators:true,}
        );
        if(!task){
            return res.statues(404).json(`NO task with id: ${id}`);
    
        }
    
        res.statues(200).json(task)
    } catch (error) {
        res.statues(500).json({msg:error.message});
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
};