const todoModel = require('../models/todoListModel')

const view_all_tasks= async(req, res) =>{
    try{
        var data = await todoModel.find({})
        res.json(data)
    }catch(err){
        res.send(err);
    }
}

const view_a_task = async(req, res) =>{
    try{
        //SELECT * FROM tasks WHERE id = req.params.id
        var data = await todoModel.findById(req.params.id)
        res.json(data)
    }catch(err){
        res.send(err)
    }
}

const create_a_task = async(req, res) =>{
    try{
        let data = req.body
        await todoModel.create(data)
        res.json({message: 'Task created successfully'})
    }catch(err){
        res.send(err)
    }
}

const update_a_task = async(req, res) =>{
    try{
        let data = req.body
        await todoModel.findByIdAndUpdate(req.params.id, data)
    }catch(err){
        res.send(err)
    }
}

const delete_a_task = async(req, res) =>{
    try{
        await todoModel.findByIdAndDelete(req.params.id)
        res.json({message: 'Task deleted successfully'})
    }catch(err){
        res.send(err)
    }
}
const delete_all_task = async(req, res) =>{
    try{
        await todoModel.deleteMany({})
        res.json({message: 'All tasks deleted successfully'})
    }catch(err){
        res.send(err)
    }
}
module.exports ={
    view_all_tasks,
    view_a_task,
    create_a_task,
    update_a_task,
    delete_a_task,
    delete_all_task
}