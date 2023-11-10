const mongoose = require('mongoose')
const { Schema } = mongoose

const UserModel = new Schema({
    username: {type: String, require: true, min: 4, unigque: true},
    password: {type: String, require: true, min: 4}
})

module.exports = mongoose.model('User', UserModel)
