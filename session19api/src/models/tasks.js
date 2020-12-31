const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    taskTitle:{ type:String, required:true, trim:true },
    details:{ type:String, required:true, trim:true },
    status: { type: Boolean, default:false },
    rate: { type: Number, default: 5 },
    taskParts: [ {
        part:{ 
            name: { type:String, required:true, trim:true }, 
            deadline: {  type:Date, required:true, trim:true }
        }
     } ],
    owner: { type: mongoose.Schema.Types.ObjectId, required:true, ref:'User' }
},
{
    timestamps:true
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task