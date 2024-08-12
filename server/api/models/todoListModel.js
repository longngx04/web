//declare mongoose
const mongoose = require('mongoose')
//declare Schema
const todoSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: "Task name cannot be empty"
        },
        created_date:{
            type: Date,
            default: Date.now
        },
        status:{
            type: [{
                type: String,
                enum:['pending', 'on-going', 'completed']
            }],
            default: 'pending'
        }
    },
    {
        versionKey: false
    }
    
)

//export module
const todoModel = mongoose.model('todos', todoSchema)

module.exports = todoModel