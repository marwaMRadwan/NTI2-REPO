const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const patSchema = new mongoose.Schema({

})
const Paitent = mongoose.model('Paitent', patSchema)
module.exports = Paitent