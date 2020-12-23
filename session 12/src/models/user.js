const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Paitent = require('./paitents')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    userName:{
        type:String,
        required: true,
        trim: true,
        unique:true,
        validate(value){
            if(!validator.isAlphanumeric(value ,'en-US')) throw new Error ('check username')	
        }
    },
    password:{
        type:String,
        lowercase:true,
        required: true,
        validate(value){
            if(
    validator.isStrongPassword(value,{ returnScore: true })<25)
             throw new Error('weak pass')   
        }
    },
    type:{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        default:"-"
    },
    phone:{
        type:String
    },
    spcialize:{
        type:String
    },
    tokens:[
        {token:{type:String, required:true}}
    ]
},
{timestamps: true}
)
userSchema.virtual('Paitent',{
    ref:'Paitent',
    localField:'_id',
    foreignField:'user_id'
})
userSchema.virtual('Doctor',{
    ref:'Doctor',
    localField:'_id',
    foreignField:'user_id'
})

userSchema.methods.toJSON =  function(){
    const user = this.toObject()
    delete user.password
    delete user.type
    delete user.tokens
    return user
}

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id}, '0efq8W>i$C=8#P_')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.authMe = async (userName, password) =>{
    const user = await User.findOne({userName})
    if(!user) throw new Error('')
    // if(user.status == false) throw new Error('') 
    const matched = await bcrypt.compare(password, user.password)
    if(!matched) throw new Error('')
    return user
}

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 13)
    next()
})

userSchema.pre('remove', async function(next){
    const user = this
    if(user.type == 1)
        await Paitent.deleteMany({user_id:user.id})
})
const User = mongoose.model('User', userSchema)
module.exports = User