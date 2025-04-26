const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: String,
    surname: String,
    password: String,
    mail: String,
    year: Number,
    username: String,
    phone: Number
}, {timestamps: true}); //updatedAt და createdAt

module.exports = mongoose.model('users', userScheme);