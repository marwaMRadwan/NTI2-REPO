const mongoose = require('mongoose')

const Task = mongoose.model('Task',{
    title:{
        type: String,
        required: true, 
        trim: true
    },
    content:{
        type: String,
        required: true, 
        trim: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task