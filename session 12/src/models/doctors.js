const { Mongoose } = require('mongoose')

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const visitSchema = new mongoose.Schema({
    doctor_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    paitent_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    visit_details:{
        type: String
    }
},
{
    timestamps:true
}
)

const Visits = mongoose.model('Visits', visitSchema)
module.exports = Visits