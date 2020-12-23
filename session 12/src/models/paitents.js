const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const patSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    history:[
        {visit:{
            type:String
        }}
    ]
},
{timestamps:true})
const Paitent = mongoose.model('Paitent', patSchema)
module.exports = Paitent