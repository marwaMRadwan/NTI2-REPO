const { Mongoose } = require('mongoose')

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const docSchema = new mongoose.Schema({

})
const Doctor = mongoose.model('Doctor', docSchema)
module.exports = Doctor