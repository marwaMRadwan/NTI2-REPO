const validator = require('validator')
const mongoose = require('mongoose')

const User = mongoose.model('User',{
    name:{
        type:String,
        required: true,
        trim: true,
        minLength:10,
        maxLength:50
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0) throw new Error ('age error')
        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }
    },
    pass:{
        type:String,
        minLength:6,
        maxLength:20,
        trim:true ,
        validate(value){
            if(value.toLowerCase().includes('marwa')) throw new Error('invalid pass')
            //MarWa Marwa MArwa MaRwa MarWa 
        }
    },
    status:{
        type: Boolean, default: true
    },
    deadLine:{
        type:Date
    }
})

module.exports = User
